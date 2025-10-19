import { readdir, readFile } from "fs/promises";
import path from "path";
import { remark } from "remark";
import remarkMdx from "remark-mdx";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import { compile } from "@mdx-js/mdx";

export interface MDXNote {
  slug: string;
  title: string;
  updated?: string;
  tag?: string[];
  content: string;
  compiledSource?: string;
  frontmatter?: Record<string, any>;
}

export async function getMDXFiles(): Promise<string[]> {
  const notesDir = path.join(process.cwd(), "content/notes");
  try {
    const files = await readdir(notesDir);
    return files.filter((file) => file.endsWith(".mdx"));
  } catch (error) {
    console.error("Error reading MDX directory:", error);
    return [];
  }
}

export async function parseMDXFile(filename: string): Promise<MDXNote | null> {
  const notesDir = path.join(process.cwd(), "content/notes");
  const filePath = path.join(notesDir, filename);

  try {
    const fileContent = await readFile(filePath, "utf-8");

    const frontmatterRegex = /^---\s*\n(.*?)\n---\s*\n/s;
    const match = fileContent.match(frontmatterRegex);

    let frontmatter: Record<string, any> = {};
    let content = fileContent;

    if (match) {
      const frontmatterYaml = match[1];
      content = fileContent.slice(match[0].length);

      const lines = frontmatterYaml.split("\n");
      for (const line of lines) {
        const colonIndex = line.indexOf(":");
        if (colonIndex > 0) {
          const key = line.slice(0, colonIndex).trim();
          const value = line
            .slice(colonIndex + 1)
            .trim()
            .replace(/^["']|["']$/g, "");

          if (value.startsWith("[") && value.endsWith("]")) {
            frontmatter[key] = value
              .slice(1, -1)
              .split(",")
              .map((item) => item.trim().replace(/^["']|["']$/g, ""));
          } else {
            frontmatter[key] = value;
          }
        }
      }
    }

    const slug = filename.replace(/\.mdx$/, "");
    const compiledSource = await compileMDXContent(content);

    return {
      slug,
      title: frontmatter.title || slug,
      updated: frontmatter.updated,
      tag: frontmatter.tag,
      content,
      compiledSource,
      frontmatter,
    };
  } catch (error) {
    console.error(`Error parsing MDX file ${filename}:`, error);
    return null;
  }
}

export async function compileMDXContent(content: string): Promise<string> {
  try {
    const processedContent = await remark()
      .use(remarkMdx)
      .use(remarkRehype, { allowDangerousHtml: true })
      .use(rehypeStringify, { allowDangerousHtml: true })
      .process(content);

    return processedContent.toString();
  } catch (error) {
    console.error("Error compiling MDX content:", error);
    try {
      const processedContent = await remark()
        .use(remarkRehype)
        .use(rehypeStringify)
        .process(content);
      return processedContent.toString();
    } catch (fallbackError) {
      console.error("Error in fallback processing:", fallbackError);
      return content;
    }
  }
}

export async function compileMDXToJS(content: string): Promise<string> {
  try {
    const compiledMDX = await compile(content, {
      outputFormat: "function-body",
      development: process.env.NODE_ENV === "development",
    });

    return String(compiledMDX);
  } catch (error) {
    console.error("Error compiling MDX to JS:", error);
    throw error;
  }
}

export async function getMDXNote(slug: string): Promise<MDXNote | null> {
  const filename = `${slug}.mdx`;
  return await parseMDXFile(filename);
}

export async function getAllMDXNotes(): Promise<MDXNote[]> {
  const files = await getMDXFiles();
  const notes = await Promise.all(files.map((file) => parseMDXFile(file)));

  return notes.filter((note): note is MDXNote => note !== null);
}

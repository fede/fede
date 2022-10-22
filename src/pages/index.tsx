import * as React from "react"
import type { HeadFC } from "gatsby"

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}
const paragraphStyles = {
  marginBottom: 48,
}

const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>
        Hi! Hola! Hej!
      </h1>
      <p style={paragraphStyles}>
        👨‍💻 I'm a Tech Lead and Engineering Manager currently working for SAS Scandinavian Airlines, previously for Klarna and Flybondi Airlines.
      </p>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>

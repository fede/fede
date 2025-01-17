import { TitleH2 } from './Title';

export const ContactMe = () => {
  return (
    <div className="mb-8">
      <TitleH2 className="pb-4">Contact me</TitleH2>

      <a
        href="mailto:hey@fede.work"
        className="text-sm md:text-xl underline mt-6 text-zinc-100 uppercase font-bold"
      >
        hey@fede.work
      </a>
    </div>
  );
};

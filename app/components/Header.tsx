import { TitleH1, TitleH3 } from './Title';
import { Link } from '@remix-run/react';

export default function Header({ title, description }) {
  return (
    <>
      <TitleH1 color="text-zinc-100 pb-4 lg:pb-16">
        <Link to="/">Hey, it's Fede</Link>
      </TitleH1>
      <div className="flex flex-col sm:flex-row mt-4 mb-4">
        <div className="pr-6 max-w-md">
          <TitleH3>{title}</TitleH3>
        </div>
        <p className="pr-6 max-w-md text-zinc-300">{description}</p>
      </div>
    </>
  );
}

import type { MetaFunction } from '@remix-run/node';
import {
  ExperienceCard,
  ExperienceDescription,
} from '~/components/ExperienceCard';
import { TitleH2 } from '~/components/Title';
import { ContactMe } from '~/components/ContactMe';
import Header from '~/components/Header';
import Main from '~/components/Main';

export const meta: MetaFunction = () => {
  return [
    { title: 'Fede Ratier' },
    {
      name: 'description',
      content: "Hi! I'm Fede, engineer manager and tech lead.",
    },
  ];
};

function HeaderTitle() {
  return (
    <>
      <div>
        Engineering Manager & Technical Lead{' '}
        <span className="text-sm text-zinc-500">by day,</span>
      </div>
      <div className="text-md text-zinc-500">
        <a className="text-teal-300 text-base" href="/live-sound-engineer">
          Sound Engineer
        </a>{' '}
        <span className="text-sm text-zinc-500">by night</span>
      </div>
    </>
  );
}

const description = `I'm an Engineering Manager & Technical Lead during daytime Sound
          Engineer on my free time. I have been working in product teams for
          several years, leading talented engineers and designers to build
          products that people love. I am passionate about building
          high-performing and diverse teams, from interviewing to onboarding,
          and from career development to team building.`;

export default function Index() {
  return (
    <Main>
      <Header title={<HeaderTitle />} description={description} />
      <div className="my-8">
        <TitleH2>Selected work</TitleH2>
        <ExperienceCard>
          <ExperienceDescription
            title="Scandinavian Airlines"
            color="text-[#C2E5F5]"
          >
            <p>
              Joined a new & small team, grew it to have created four new teams
              under it, built an application core, a foundational team of system
              integrations and several core components that allowed us to launch
              digital solutions in a timely manner with small teams, while
              decreasing operational costs and risks, and improving safety,
              efficiency and productivity in the daily operations.
            </p>
          </ExperienceDescription>
        </ExperienceCard>
        <ExperienceCard>
          <ExperienceDescription title="Klarna" color="text-[#FFCCCC]">
            <p>
              My team built the Klarna Reward program (a.k.a Vibe) from scratch.
              This program was a success and was considered a key factor in the
              high adoption rate of our customers in US and Australia. We
              expanded the possibilities to earn points by discovering features
              within the Klarna app, and with it we expanded and staffed up more
              teams.
            </p>
          </ExperienceDescription>
        </ExperienceCard>
        <ExperienceCard>
          <ExperienceDescription title="Flybondi" color="text-[#fdbe15]">
            <p>
              Joined very early in the process of creating the airline. We
              started as a small team doing the IBE (Internet Booking Engine) on
              top of existing solutions that are not up to the modern standards,
              and also built solutions for the operations. The team started very
              small and became a whole department building digital solutions for
              the entire Airline.
            </p>
          </ExperienceDescription>
        </ExperienceCard>
        <p className="max-w-5xl text-center">
          <a
            href="https://www.linkedin.com/in/federatier/"
            target="_window"
            className="mx-auto text-sm md:text-xl p-3 mt-6 inline-block text-zinc-100 bg-zinc-800 uppercase font-bold"
          >
            Find more on LinkedIn
          </a>
        </p>
      </div>
      <ContactMe />
    </Main>
  );
}

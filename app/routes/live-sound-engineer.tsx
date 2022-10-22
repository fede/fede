import { TitleH2 } from '../components/Title';
import Header from '~/components/Header';
import {
  ExperienceCard,
  ExperienceDescription,
} from '../components/ExperienceCard';
import { ContactMe } from '../components/ContactMe';
import Main from '~/components/Main';

export const meta = () => {
  return [
    { title: 'Fede Ratier - Live Sound Engineer' },
    {
      name: 'description',
      content: 'Got an event or a band and need a live sound engineer?',
    },
  ];
};

function HeaderTitle() {
  return <div className="text-teal-300">Live sound engineer</div>;
}

const description = `I'm available for hire as a live sound engineer in Stockholm & Vilnius. Either with own gear or the venue's gear. I've been doing sound for bands and events for over 10 years in different set ups, from small and medium gigs to live stream mixes and conferences sound.`;

export default function SoundEngineer() {
  return (
    <Main>
      <Header title={<HeaderTitle />} description={description} />

      <div className="my-8">
        <TitleH2>Currently doing</TitleH2>
        <ExperienceCard>
          <ExperienceDescription
            title="Sofar Stockholm"
            color="text-yellow-600"
          >
            <p>
              Joined the Sofar Sounds Stockholm team two years ago. I do setup
              and live mix for the bands. The usual schedule has 3 bands with a
              short break in between, so these gigs are purely run on digital
              mixers.
            </p>
          </ExperienceDescription>
        </ExperienceCard>
        <ExperienceCard>
          <ExperienceDescription title="SDVN" color="#FFF">
            <p>
              This is my own project. It's a platform for venues and bands to
              connect and book live shows. The live sound mix and setup is run
              by me for all bands in Stockholm and Vilnius gigs. After the bands
              play, we open the stage for open mic nights.
            </p>
            <p></p>
          </ExperienceDescription>
        </ExperienceCard>
      </div>
      <ContactMe />
    </Main>
  );
}

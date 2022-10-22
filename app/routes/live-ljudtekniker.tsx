import { TitleH2 } from '../components/Title';
import {
  ExperienceCard,
  ExperienceDescription,
} from '../components/ExperienceCard';
import { ContactMe } from '../components/ContactMe';
import Header from '~/components/Header';
import Main from '~/components/Main';

export const meta = () => {
  return [
    { title: 'Fede Ratier - Ljudtekniker' },
    {
      name: 'description',
      content:
        'Jag är tillgänglig för anställning som ljudtekniker för liveframträdanden i Stockholm och Vilnius',
    },
  ];
};

function HeaderTitle() {
  return <div className="text-teal-300">Ljudtekniker</div>;
}

const description = `Jag är tillgänglig för anställning som ljudtekniker för liveframträdanden i Stockholm och Vilnius. Antingen med egen utrustning eller lokalens utrustning. Jag har gjort ljud för band och evenemang i över 10 år i olika uppsättningar, från små och medelstora spelningar till livestreammixar och konferensljud.`;

export default function SoundEngineerSwedish() {
  return (
    <Main>
      <Header title={<HeaderTitle />} description={description} />

      <div className="my-8">
        <TitleH2>För närvarande gör jag</TitleH2>
        <ExperienceCard>
          <ExperienceDescription
            title="Sofar Stockholm"
            color="text-yellow-600"
          >
            <p>
              Jag gick med i Sofar Sounds Stockholm-teamet för två år sedan. Jag
              gör uppriggning och livemix för banden. Det vanliga schemat har 3
              band med en kort paus emellan, så dessa spelningar körs enbart på
              digitala mixerbord.
            </p>
          </ExperienceDescription>
        </ExperienceCard>
        <ExperienceCard>
          <ExperienceDescription title="SDVN" color="#FFF">
            <p>
              Detta är mitt eget projekt. Det är en plattform för spelställen
              och band att kopplas samman och boka liveframträdanden.
              Liveljudmixen och uppsättningen sköts av mig för alla band på
              spelningar i Stockholm och Vilnius. Efter att banden har spelat
              öppnar vi scenen för open mic-kvällar.
            </p>
            <p></p>
          </ExperienceDescription>
        </ExperienceCard>
      </div>
      <ContactMe />
    </Main>
  );
}

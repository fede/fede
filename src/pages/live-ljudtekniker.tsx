import * as React from "react";
import type { HeadFC } from "gatsby";
import { css } from "../../styled-system/css";
import { TitleH1, TitleH2 } from "../components/Title";
import FlexRow from "../components/FlexRow";
import {
  ExperienceCard,
  ExperienceDescription,
} from "../components/ExperienceCard";
import { container } from "../../styled-system/patterns";

const DropHead = () => {
  return (
    <div
      className={css({
        color: "teal.300",
      })}
    >
      Live sound engineer
    </div>
  );
};

const IndexPage = () => {
  return (
    <main className={container({ paddingBottom: "6" })}>
      <TitleH1 color="zinc.100">
        <a href="/">Hej, it's Fede</a>
      </TitleH1>
      <FlexRow title={<DropHead />}>
        <b>
          Jag är tillgänglig för anställning som ljudtekniker för
          liveframträdanden i Stockholm och Vilnius.
        </b>
        Antingen med egen utrustning eller lokalens utrustning. Jag har gjort
        ljud för band och evenemang i över 10 år i olika uppsättningar, från små
        och medelstora spelningar till livestreammixar och konferensljud.
      </FlexRow>

      <div className={css({ marginY: "8" })}>
        <TitleH2>För närvarande gör jag</TitleH2>
        <ExperienceCard>
          <ExperienceDescription
            title="Sofar Stockholm"
            color="rgb(209, 160, 63)"
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
      <div className={css({ marginBottom: "8" })}>
        <TitleH2>Kontakta mig</TitleH2>

        <a
          href="mailto:hey@fede.work"
          className={css({
            fontSize: "sm",
            textDecoration: "underline",
            marginTop: "6",
            md: { fontSize: "xl" },
            color: "zinc.100",
            textTransform: "uppercase",
            fontWeight: "bold",
          })}
        >
          hey@fede.work
        </a>
      </div>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Federico Ratier</title>;

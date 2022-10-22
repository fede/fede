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
        <a href="/">Hey, it's Fede</a>
      </TitleH1>
      <FlexRow title={<DropHead />}>
        <b>
          I'm available for hire as a{" "}
          <a href="/live-ljudtekniker">live sound engineer in Stockholm</a> &
          Vilnius .
        </b>
        Either with own gear or the venue's gear. I've been doing sound for
        bands and events for over 10 years in different set ups, from small and
        medium gigs to live stream mixes and conferences sound.
      </FlexRow>

      <div className={css({ marginY: "8" })}>
        <TitleH2>Currently doing</TitleH2>
        <ExperienceCard>
          <ExperienceDescription
            title="Sofar Stockholm"
            color="rgb(209, 160, 63)"
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
      <div className={css({ marginBottom: "8" })}>
        <TitleH2>Contact me</TitleH2>

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

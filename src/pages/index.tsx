import * as React from "react"
import type { HeadFC } from "gatsby"
import { css } from "../../styled-system/css"
import { TitleH1, TitleH2 } from "../components/Title"
import FlexRow from "../components/FlexRow"
import { ExperienceCard, ExperienceDescription } from "../components/ExperienceCard"
import { container } from "../../styled-system/patterns"

const IndexPage = () => {
  return (
    <main className={container({ paddingBottom: '6' })}>
      <TitleH1 color="zinc.100">Hey, it's Fede</TitleH1>
      <FlexRow title={`Engineering Manager & Technical Lead`}>
        I have been working in product teams for several years, leading talented engineers and designers to build products that people love.
        I am passionate about building high-performing and diverse teams and helping people grow.
      </FlexRow>
      
      <div className={css({ marginY: '8' })}>
        <TitleH2>Selected work</TitleH2>
        <ExperienceCard>
            
            <ExperienceDescription title="Scandinavian Airlines" color="#C2E5F5">
              <p>I joined the <i>Airline Digitalization</i> team over a year ago. Since then we have created four new teams, built an application core, a foundational team of system integrations and several core components that allowed us to launch three applications to improve safety, efficiency and productivity in the daily operations.</p>
            </ExperienceDescription>
        </ExperienceCard>
        <ExperienceCard >
            
            <ExperienceDescription title="Klarna" color="#FFCCCC">
              <p>My team built the Klarna Reward program (a.k.a Vibe) from scratch. This program was a success and was considered a key factor in the high adoption rate of our customers in US and Australia. We expanded the possibilities to earn points by discovering features within the Klarna app, and with it we expanded and staffed up more teams.</p>
            </ExperienceDescription>
        </ExperienceCard>
        <ExperienceCard >
          
          <ExperienceDescription title="Flybondi" color="#fdbe15">
            <p>Joined very early in the process of creating the airline. We started as a small team doing the IBE (Internet Booking Engine) on top of existing solutions that are not up to the modern standards, and also built solutions for the operations. The team started very small and became a whole deparment building digital solutions for the entire Airline.</p>
          </ExperienceDescription>        
        </ExperienceCard>
      <p className={css({ maxWidth: '5xl', textAlign: 'center' })}>
        <a href="https://www.linkedin.com/in/federatier/" target="_window" className={css({ marginX: 'auto', fontSize: 'sm', padding: '3', marginTop: '6', md: { fontSize: 'xl' } , display: 'inline-block', color: 'zinc.100', backgroundColor:'zinc.800', textTransform: 'uppercase', fontWeight: 'bold'})}>Find more on LinkedIn</a>
      </p>

      </div>
<div className={css({ marginBottom: '8' })}>
      <TitleH2>Contact me</TitleH2>
      
      
         <a href="mailto:hey@fede.work" className={css({ fontSize: 'sm', textDecoration: 'underline', marginTop: '6', md: { fontSize: 'xl' } , color: 'zinc.100',  textTransform: 'uppercase', fontWeight: 'bold'})}>hey@fede.work</a>
      </div>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Federico Ratier</title>

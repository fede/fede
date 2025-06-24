import { Mail, MapPin, Linkedin } from 'lucide-react'
import { Badge } from '~/components/ui/badge'
import { Card, CardContent } from '~/components/ui/card'

export const meta = () => {
  return [
    { title: 'Fede Ratier' },
    {
      name: 'description',
      content: "Hi! I'm Fede, engineer manager and tech lead.",
    },
  ]
}

function Header() {
  return (
    <div className="text-center mb-8 print:mb-4 p-4 bg-black print:bg-black text-white top-0 sticky print:relative">
      <h1 className="text-4xl font-bold mb-2">Federico Ratier</h1>
      <p className="text-xl  mb-4">
        Engineering Manager • Product Lead • Solutions Architect
      </p>

      <div className="flex flex-wrap justify-center gap-4 text-sm">
        <div className="flex items-center gap-1">
          <Mail className="w-4 h-4" />
          <span>hello@federatier.com</span>
        </div>
        <div className="flex items-center gap-1">
          <MapPin className="w-4 h-4" />
          <span>Stockholm, Sweden</span>
        </div>
        <div className="flex items-center gap-1">
          <Linkedin className="w-4 h-4" />
          <span>linkedin.com/in/federatier</span>
        </div>
      </div>
    </div>
  )
}

export default function Index() {
  return (
    <>
      <Header />
      <div className="print:ml-4 print:mr-4">
        <div className="container mx-auto max-w-4xl p-6">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Professional Summary
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Experienced engineering manager and technical product lead. I
              strive helping teams find their purpose, become owners of their
              solutions and deliver value to customers, internal and external.
              Both as product and at technical level.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Silo breaker, in my teams we have always build for reusability,
              that way we can focus on what's important and have some extra time
              to experiment new approaches.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Interested in complex problems that require creative solutions,
              iterations and trying new things.
            </p>
            <p className="text-gray-700 leading-relaxed">
              I have a strong background in software engineering, with over 10
              years of experience in building scalable applications and leading
              cross-functional teams. I am passionate about mentoring engineers
              and fostering a culture of continuous improvement.
            </p>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Selected work Experience
            </h2>

            <div className="space-y-6">
              <Card className="shadow-none">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">
                        Engineering manager, Product lead, and Solutions
                        architect
                      </h3>
                      <Badge className="bg-blue-900">
                        Scandinavian Airlines
                      </Badge>
                    </div>
                    <span className="text-gray-500 font-medium whitespace-nowrap leading-7">
                      2022 - Present
                    </span>
                  </div>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>
                      <b>Designed and applied a new organization</b> that would
                      turn the team into a domain of team to reduce repetition,
                      tech diversity and increase velocity.
                    </li>
                    <li>
                      Appointed different tech leads and product owners for the
                      different teams, while making sure that all teams are
                      aligned in architecture and tech adoption as the{' '}
                      <b>tech lead of tech leads (4 product teams)</b>.
                    </li>
                    <li>
                      Implemented cloud native solutions with <b>IaC</b> that
                      allows us to quickly recover from a disaster, prevent
                      downtimes and increase traceability and security of our
                      changes.
                    </li>
                    <li>
                      <b>Product owner</b> of a team building a react framework
                      that allows any other team in the company to build their
                      own app within, while having tests, monitoring, packaging,
                      deploying, user management and even a UI library
                      streamlined with just one command line{' '}
                      <b>
                        reducing delivery time from 12 months to only 3 months
                      </b>
                      .
                    </li>
                    <li>
                      Implemented different AI tools that allowed us improve the
                      development of the interfaces using our own components
                      library, and a <b>MCP server</b> to allow, privately and
                      securely, analysis of the data for our operational
                      stakeholders.
                    </li>
                    <li>
                      Several on-site visits to the stations, testing new
                      prototypes and integrations with <b>IoT</b>. Surveying and
                      testing own prototypes.
                    </li>
                    <li>
                      <b>Architect of wifi onboard our aircrafts</b>. As we are
                      heading to the adoption of Starlink in our aircrafts, we
                      are also refreshing our offering while providing streaming
                      content without saturating the downlink and in-seat
                      ordering online and offline.
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">
                        Engineering manager
                      </h3>
                      <Badge className="bg-pink-300 text-black">Klarna</Badge>
                    </div>
                    <span className="text-gray-500 font-medium leading-7">
                      2019 - 2022
                    </span>
                  </div>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>
                      Led a team of up to <b>11 direct reports</b>, ranging from
                      recent graduates to senior developers and two Engineering
                      Managers.
                    </li>
                    <li>
                      My responsibilities included{' '}
                      <b>aligning business and technical needs</b>. Work closely
                      with the PO to continuously deliver new features without
                      adding tech debt.
                    </li>
                    <li>
                      Launched the program to several other countries quickly
                      reaching <b>5 million users</b> (from a projected 3
                      million) overshooting our target.
                    </li>
                    <li>
                      Annual management of budget for infrastructure cost and
                      development team cost. Including{' '}
                      <b>salary and performance review</b> of the direct
                      reports.
                    </li>
                    <li>
                      <b>Periodic 1-on-1</b>, constantly following up and
                      assisting in career growth and team health. Including
                      other EMs.
                    </li>
                    <li>
                      <b>Technical and soft skills interviewer</b>. Trainer for
                      other interviewers joining the pipeline.
                    </li>
                    <li>
                      Co-organized thekonferen.se (
                      <b>internal tech conference</b>) and drafted the first
                      toolkit to help streamline every years organization.
                    </li>
                    <li>
                      <b>Designed and executed the division of our team</b> into
                      two (and eventually three) problem spaces that allowed the
                      developers to focus deeper on less things but still
                      retaining the big picture.
                    </li>
                    <li>
                      <b>Architecture</b> and development of the earn & burn
                      system. Accruing points for paid purchases, and gift cards
                      unlocking handling edge cases like refunds and{' '}
                      <b>fraud prevention</b>.
                    </li>
                    <li>
                      Implemented a wide variety of AWS products to ensure
                      reliability, security, redundancy and also{' '}
                      <b>geographical distribution</b> since the reward program
                      runs in several countries around the globe.
                    </li>
                    <li>
                      <b>Member of the internal architecture group</b> that
                      would help and guide the teams with less expertise or that
                      needed a second opinion on their decision.
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-none print:border-none">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">
                        Senior full stack engineer
                      </h3>
                      <Badge className="bg-yellow-400 text-black">
                        Flybondi
                      </Badge>
                    </div>
                    <span className="text-gray-500 font-medium whitespace-nowrap leading-7">
                      2019 - 2022
                    </span>
                  </div>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>
                      Developer of the <b>responsive IBE</b> (Internet Booking
                      Engine) flow for passengers.
                    </li>
                    <li>
                      <b>A/B testing</b> of new features and developments with
                      our passengers at different airports.
                    </li>
                    <li>
                      Run the <b>discovery and led the initial prototype</b> of
                      what would become later a flight scheduling tool that
                      allowed to communicate with crew and passengers the status
                      of each flight.
                    </li>
                    <li>
                      <b>Serverless infrastructure</b> using AWS Lambda with
                      Node.js, server side rendering with React, a GraphQL
                      server with multiple systems integrations such as Radixx.
                    </li>
                    <li>
                      Implementation of user state and data storage with
                      buckets, and databases such as{' '}
                      <b>SQL databases and nosql like DynamoDB and Redis</b>.
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Other experiences
            </h2>

            <div className="">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-gray-900">
                  CTO & Co-Founder -{' '}
                  <span className="text-gray-500 font-normal">Cinemad.Tv</span>
                </h3>
                <p className="text-gray-600 whitespace-nowrap">2014 - 2017</p>
              </div>

              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-gray-900">
                  Fullstack developer -{' '}
                  <span className="text-gray-500 font-normal">
                    Buenos Aires city government
                  </span>
                </h3>
                <p className="text-gray-600 whitespace-nowrap">2009 - 2014</p>
              </div>

              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-gray-900">
                  Fullstack developer -{' '}
                  <span className="text-gray-500 font-normal">
                    Grupo Extremo Sur
                  </span>
                </h3>
                <p className="text-gray-600 whitespace-nowrap">2005 - 2009</p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Education</h2>

            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Telecommunications Engineering
                </h3>
                <p className="text-md text-neutral-500 font-normal">
                  Universidad Argentina de la Empresa
                </p>
              </div>
              <span className="text-gray-500 font-medium whitespace-nowrap">
                2006 - 2011
              </span>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

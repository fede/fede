import { Mail, MapPin, Linkedin } from "lucide-react";

const Badge = ({ children, className }) => (
  <span
    className={`inline-flex items-center justify-center !px-2 !py-1 text-xs font-semibold ${className}`}
  >
    {children}
  </span>
);

const CompanyHeader = ({ name, position, date, badgeClasses }) => (
  <div className="flex justify-between items-start mb-3">
    <div className="flex flex-cols gap-2">
      <Badge className={badgeClasses}>{name}</Badge>
      <h3 className="text-xl font-semibold !text-gray-900 !mt-1">{position}</h3>
    </div>
    <span className="text-gray-500 font-medium whitespace-nowrap leading-7">
      {date}
    </span>
  </div>
);

export const meta = () => {
  return [
    { title: "Federico Ratier CV" },
    {
      name: "description",
      content:
        "Federico Ratier - Engineering Manager, Tech Lead, Product Lead, and Sound Engineer",
    },
  ];
};

function Header() {
  return (
    <div className="text-center mb-8 print:mb-4 p-4 bg-black print:bg-black text-white top-0 sticky print:relative">
      <h1 className="text-4xl font-bold mb-2 !text-white">Federico Ratier</h1>
      <p className="text-xl  mb-4">
        Engineering Manager • Tech & Product Lead • Enterprise Architect
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
  );
}

export default function Index() {
  return (
    <div className="!font-sans !text-gray-900 !bg-white">
      <Header />
      <div className="print:ml-4 print:mr-4 ">
        <div className="container mx-auto max-w-4xl p-6">
          <section className="mb-8">
            <h2 className="text-2xl font-bold !text-gray-900 mb-4">
              Professional Summary
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Experienced engineering manager and technical product lead.
            </p>
            <p className="text-gray-700 leading-relaxed">
              I strive helping teams find their purpose, become owners of their
              solutions and deliver value to customers, internal and external.
              Both as product and at technical level. Growing people and give
              support to constantly challenge them into growing and help each
              other.
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
            <h2 className="text-2xl font-bold !text-gray-900 mb-6">
              Selected work Experience
            </h2>

            <div className="space-y-6">
              <CompanyHeader
                name="Scandinavian Airlines"
                position="Engineering Manager & Product Lead"
                date="2022 - Present"
                badgeClasses="bg-blue-900 text-white"
              />
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>
                  Interviewing and arranging of multiple teams with a mix of on
                  site, near shore and off shore developers that allows us to
                  deliver efficiently, with accountability and security.
                </li>
                <li>
                  Developing and growing talent within our teams with
                  performance plans, support on career path growth and
                  increasing challenges that keep the developers engaged into
                  improving and challenging our ways of working for everyones
                  benefit.
                </li>
                <li>
                  Planning and synchronizing deliveries between teams to make
                  sure dependencies don't become blockers, risks are identified
                  and documented.
                </li>
                <li>
                  Coordination with multiple operational areas such us the
                  control center, aircraft maintenance and airports. Constant
                  identification of new opportunities
                </li>
                <li>
                  Co-authored the first internal Engineering Handbook. This
                  onboarding guide helps all developers to easily align and
                  agree on the ways of working, api patterns, architecture and
                  best practices
                </li>
                <li>
                  Product owner of a team building core application that allows
                  any other team in the company to build their own feature
                  within. This has reduced delivery time of new digital
                  solutions from 12~24 months to 3~5 months, since the
                  development teams no longer need to set up their own testing
                  suite, monitoring, CI setup, UI library or even
                  authentication. The app uses centralized IAM through AD making
                  easy and safe to manage accesses.
                </li>
                <li>
                  Implemented different AI tools that allowed us improve the
                  development of the interfaces using our own components
                  library, and a MCP server to allow, privately and securely,
                  analysis of the data for our operational stakeholders.
                </li>
                <li>
                  Periodic on-site visits to the stations, testing new
                  prototypes and integrations with IoT. Surveying and testing
                  own prototypes. Testing apps with our real users
                </li>
                <li>
                  Architect of wifi onboard our aircrafts. As we are heading to
                  the adoption of Starlink in our aircrafts, we are also
                  refreshing our offering while providing streaming content
                  without saturating the downlink and in-seat ordering online
                  and offline.
                </li>
              </ul>

              <CompanyHeader
                name="Klarna"
                position="Engineering manager"
                date="2019 - 2022"
                badgeClasses="bg-pink-300 text-black"
              />
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>
                  Led a team of up to 11 direct reports, ranging from recent
                  graduates to senior developers and two Engineering Managers.
                </li>
                <li>
                  My responsibilities included aligning business and technical
                  needs. Work closely with the PO to continuously deliver new
                  features without adding tech debt.
                </li>
                <li>
                  Launched the program to several other countries quickly
                  reaching 5 million users (from a projected 3 million)
                  overshooting our target.
                </li>
                <li>
                  Annual management of budget for infrastructure cost and
                  development team cost. Including salary and performance review
                  of the direct reports.
                </li>
                <li>
                  Periodic 1-on-1, constantly following up and assisting in
                  career growth and team health. Including other EMs.
                </li>
                <li>
                  Technical and soft skills interviewer. Trainer for other
                  interviewers joining the pipeline.
                </li>
                <li>
                  Co-organized thekonferen.se (internal tech conference) and
                  drafted the first toolkit to help streamline every years
                  organization.
                </li>
                <li>
                  Designed and executed the division of our team into two (and
                  eventually three) problem spaces that allowed the developers
                  to focus deeper on less things but still retaining the big
                  picture.
                </li>
                <li>
                  Architecture and development of the earn & burn system.
                  Accruing points for paid purchases, and gift cards unlocking
                  handling edge cases like refunds and fraud prevention.
                </li>
                <li>
                  Implemented a wide variety of AWS products to ensure
                  reliability, security, redundancy and also geographical
                  distribution since the reward program runs in several
                  countries around the globe.
                </li>
                <li>
                  Member of the internal architecture group that would help and
                  guide the teams with less expertise or that needed a second
                  opinion on their decision.
                </li>
              </ul>

              <CompanyHeader
                name="Flybondi"
                position="Senior full stack engineer"
                date="2019 - 2022"
                badgeClasses="bg-yellow-400 text-black"
              />
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>
                  Developer of the responsive IBE (Internet Booking Engine) flow
                  for passengers.
                </li>
                <li>
                  A/B testing of new features and developments with our
                  passengers at different airports.
                </li>
                <li>
                  Run the discovery and led the initial prototype of what would
                  become later a flight scheduling tool that allowed to
                  communicate with crew and passengers the status of each
                  flight.
                </li>
                <li>
                  Serverless infrastructure using AWS Lambda with Node.js,
                  server side rendering with React, a GraphQL server with
                  multiple systems integrations such as Radixx.
                </li>
                <li>
                  Implementation of user state and data storage with buckets,
                  and databases such as SQL databases and nosql like DynamoDB
                  and Redis.
                </li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold !text-gray-900 mb-4">
              Other experiences
            </h2>

            <div className="flex justify-between items-start mb-2">
              <h3 className="font-semibold !text-gray-900">
                CTO & Founding Engineer -{" "}
                <span className="!text-gray-500 font-normal">YaSports</span>
                <div className="font-normal text-sm">
                  Built a video on-demand platform for sports archive focused on
                  mobile devices. Worked together with Akamai to optimize HLS
                  streaming for low bandwidth connections. Managed a small team
                  of developers and user testing. Acquired by a telecom company.
                </div>
              </h3>
              <p className="!text-gray-600 whitespace-nowrap">2016 - 2017</p>
            </div>

            <div className="">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold !text-gray-900">
                  CTO & Co-Founder -{" "}
                  <span className="!text-gray-500 font-normal">Cinemad.Tv</span>
                  <div className="font-normal text-sm">
                    Built from scratch an interactive video ads platform.
                    Pitched for investment and secured funding. Interviewed,
                    hired and managed a team of developers. Exited after being
                    acquired by a digital marketing agency.
                  </div>
                </h3>
                <p className="text-gray-600 whitespace-nowrap">2014 - 2017</p>
              </div>

              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold !text-gray-900">
                  Fullstack developer -{" "}
                  <span className="text-gray-500 font-normal">
                    Buenos Aires city government
                  </span>
                  <div className="font-normal text-sm">
                    Government website and citizens services modernization.
                  </div>
                </h3>
                <p className="text-gray-600 whitespace-nowrap">2009 - 2014</p>
              </div>

              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold !text-gray-900">
                  Fullstack developer -{" "}
                  <span className="text-gray-500 font-normal">
                    Grupo Extremo Sur
                  </span>
                  <div className="font-normal text-sm">
                    E-Learning platform. LMS for corporate training.
                  </div>
                </h3>
                <p className="text-gray-600 whitespace-nowrap">2005 - 2009</p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold !text-gray-900 mb-3">
              Education
            </h2>

            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-lg font-semibold !text-gray-900">
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
    </div>
  );
}

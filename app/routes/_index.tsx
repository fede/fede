import type { MetaFunction } from '@remix-run/node'

import Header from '~/components/Header'
import Main from '~/components/Main'
import { Link } from '@remix-run/react'

export const meta: MetaFunction = () => {
  return [
    { title: 'Fede Ratier' },
    {
      name: 'description',
      content: "Hi! I'm Fede, Engineering manager and Product lead.",
    },
  ]
}

function HeaderTitle() {
  return (
    <>
      <div>
        <a href="/cv" className="hover:underline">
          Engineering Manager & Product Lead
        </a>{' '}
        <span className="text-sm text-zinc-500">by day,</span>
      </div>
      <div className="text-md text-zinc-500">
        <span className="text-teal-500 text-base">Sound Engineer</span>{' '}
        <span className="text-sm text-zinc-500">by night</span>
      </div>
    </>
  )
}

export default function Index() {
  return (
    <Main>
      <Header title={<HeaderTitle />} />
      <ul>
        <li>
          <Link to="https://linkedin.com/in/federatier" className="underline">
            linkedin
          </Link>
        </li>
        <li>
          <Link to="/tools/stage-helper" className="underline">
            dummy stage helper
          </Link>
        </li>
      </ul>
    </Main>
  )
}

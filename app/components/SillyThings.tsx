import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '~/components/ui/card'
import { TitleH3 } from './Title'
import { Link } from '@remix-run/react'

export default function SillyThings() {
  return (
    <div>
      <TitleH3 className="text-zinc-400 mt-16">Silly things</TitleH3>
      <div className="pb-4">
        Just a list of extremely simple tools that I use frequently, and you can
        too.
      </div>
      <Card className="max-w-96 bg-zinc-900 border-zinc-600 text-zinc-200">
        <CardHeader>
          <CardTitle>
            <Link to="/tools/stage-helper">Stage Helper</Link>
          </CardTitle>
          <CardDescription>
            A timer with notes. Useful when doing demos and presentations.
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  )
}

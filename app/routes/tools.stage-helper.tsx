import { useState, useEffect } from 'react'
import { Button } from '~/components/ui/button'
import { Card, CardContent } from '~/components/ui/card'
import { Input } from '~/components/ui/input'
import { Play, Pause, RotateCcw, Plus, X } from 'lucide-react'
import type { MetaFunction } from '@remix-run/node'

export const meta: MetaFunction = () => {
  return [
    { title: 'Stage Helper' },
    {
      name: 'description',
      content:
        'Speaker timer with list of notes for stage speaking and presentations.',
    },
  ]
}

export default function StageHelper() {
  const [timeLeft, setTimeLeft] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  const [listItems, setListItems] = useState<string[]>([
    'Countdown timer display',
    'Three preset timer options: 5 minutes, 3 minutes, and 1 minute',
    'Start, pause, and reset functionality',
  ])
  const [newItem, setNewItem] = useState('')

  useEffect(() => {
    let interval: NodeJS.Timeout

    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1)
      }, 1000)
    } else if (timeLeft === 0) {
      setIsRunning(false)
    }

    return () => clearInterval(interval)
  }, [isRunning, timeLeft])

  const toggleTimer = () => setIsRunning((prev) => !prev)

  const resetTimer = () => {
    setIsRunning(false)
    setTimeLeft(0)
  }

  const startNewCountdown = (minutes: number) => {
    setTimeLeft(minutes * 60)
    setIsRunning(true)
  }

  const formatTime = (totalSeconds: number) => {
    const minutes = Math.floor(totalSeconds / 60)
    const seconds = totalSeconds % 60
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
  }

  const addItem = () => {
    if (newItem.trim()) {
      setListItems((prev) => [...prev, newItem.trim()])
      setNewItem('')
    }
  }

  const removeItem = (index: number) => {
    setListItems((prev) => prev.filter((_, i) => i !== index))
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black p-4">
      <Card className="w-full max-w-md mb-8 bg-zinc-900 border-zinc-900">
        <CardContent className="flex flex-col items-center space-y-6 p-6">
          <div
            className="text-6xl font-bold text-center text-zinc-100"
            aria-live="polite"
          >
            {formatTime(timeLeft)}
          </div>
          <div className="flex space-x-2 w-full justify-center">
            <Button
              onClick={() => startNewCountdown(5)}
              disabled={isRunning}
              variant={timeLeft === 300 ? 'default' : 'outline'}
            >
              5 min
            </Button>
            <Button
              onClick={() => startNewCountdown(3)}
              disabled={isRunning}
              variant={timeLeft === 180 ? 'default' : 'outline'}
            >
              3 min
            </Button>
            <Button
              onClick={() => startNewCountdown(1)}
              disabled={isRunning}
              variant={timeLeft === 60 ? 'default' : 'outline'}
            >
              1 min
            </Button>
          </div>
          <div className="flex space-x-2">
            <Button
              onClick={toggleTimer}
              disabled={timeLeft === 0}
              aria-label={isRunning ? 'Pause countdown' : 'Start countdown'}
            >
              {isRunning ? (
                <Pause className="h-4 w-4 mr-2" />
              ) : (
                <Play className="h-4 w-4 mr-2" />
              )}
              {isRunning ? 'Pause' : 'Start'}
            </Button>
            <Button onClick={resetTimer} aria-label="Reset countdown">
              <RotateCcw className="h-4 w-4 mr-2" />
              Reset
            </Button>
          </div>
        </CardContent>
      </Card>
      <Card className="w-full max-w-md bg-zinc-900 border-zinc-900 text-zinc-100">
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-4">Notes:</h2>
          <ul className="space-y-2">
            {listItems.map((item, index) => (
              <li key={index} className="flex items-center justify-between">
                <span className="flex-grow">{item}</span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => removeItem(index)}
                  aria-label={`Remove item: ${item}`}
                >
                  <X className="h-4 w-4" />
                </Button>
              </li>
            ))}
          </ul>
          <div className="flex mt-4">
            <Input
              type="text"
              placeholder="Add new feature"
              value={newItem}
              onChange={(e) => setNewItem(e.target.value)}
              className="flex-grow mr-2 bg-zinc-800 border-zinc-800"
            />
            <Button onClick={addItem} disabled={!newItem.trim()}>
              <Plus className="h-4 w-4 mr-2" />
              Add
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

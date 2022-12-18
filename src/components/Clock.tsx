import React, {
  PropsWithChildren,
  ReactElement,
  useEffect,
  useState,
} from 'react'
import { LOCATION } from '../content/data'
import Iconed from './Iconed'
import { Clock as ClockIcon } from 'react-feather'

interface ClockProps
  extends PropsWithChildren,
    React.HTMLAttributes<HTMLButtonElement> {
  location?: string
}

const Clock: React.FC<ClockProps> = ({
  children,
  className,
  location = LOCATION.timeZone,
  ...props
}): ReactElement => {
  const [date, setDate] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000)

    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <Iconed icon={<ClockIcon strokeWidth={3} />} className=" font-mono text-lg">
      <span>
        {date.toLocaleTimeString(undefined, {
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
          timeZone: location,
        })}
      </span>
    </Iconed>
  )
}
export default Clock

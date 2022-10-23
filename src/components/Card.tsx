import React from 'react'
import { Calendar } from 'react-feather'

interface CardProps extends React.PropsWithChildren {
  title: React.ReactNode
  skills?: string[]
  startDate?: string
  description?: React.ReactNode
  endDate?: string
}

const Card = ({
  children,
  title,
  description,
  startDate,
  endDate,
  skills,
}: CardProps): React.FC => (
  <li className="flex flex-col">
    <h3 className="leading-normal">{title}</h3>
    {description && (
      <p className="md:hyphens pb-2 leading-normal">{description}</p>
    )}
    {children && <p className="pb-2">{children}</p>}
    {startDate && (
      <p className=" text-gray-500 dark:text-gray-400">
        <span className="inline-flex items-baseline gap-1">
          <Calendar size={12} />
          {startDate}
        </span>{' '}
        {endDate ? (
          <span className="inline-flex items-baseline gap-1">
            — <Calendar size={12} />
            {endDate}
          </span>
        ) : (
          ' — now'
        )}
      </p>
    )}
  </li>
)

export default Card

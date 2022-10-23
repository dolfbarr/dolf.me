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
    <h3>{title}</h3>
    {description && <p className="pb-2 text-justify">{description}</p>}
    {children && <p className="pb-2">{children}</p>}
    {skills?.length && (
      <p className="pb-2 text-justify">Tech: {skills.map((skill) => skill)}</p>
    )}
    {startDate && (
      <p className="pb-2 text-gray-500">
        <span className="inline-flex items-baseline gap-1">
          <Calendar size={12} />
          {startDate} — {endDate ?? 'now'}
        </span>
      </p>
    )}
  </li>
)

export default Card

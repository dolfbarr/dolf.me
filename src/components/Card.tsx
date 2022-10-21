import React from 'react'

interface CardProps extends React.PropsWithChildren {
  title: string
  skills?: string[]
  startDate?: string
  description?: string
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
    {description && <p className="pb-2">{description}</p>}
    {children && <p className="pb-2">{children}</p>}
    {skills?.length && (
      <p className="pb-2">
        Tech:{' '}
        {skills.map((skill) => (
          <span key={skill}>{skill}</span>
        ))}
      </p>
    )}
    {startDate && (
      <p className="pb-2 text-gray-500">
        {startDate} — {endDate ?? 'now'}
      </p>
    )}
  </li>
)

export default Card

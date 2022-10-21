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
  <li className="flex flex-col pb-4">
    <h3>{title}</h3>
    {description && <p>{description}</p>}
    {children && <p>{children}</p>}
    {skills?.length && (
      <p>
        Tech:{' '}
        {skills.map((skill) => (
          <span key={skill}>{skill}</span>
        ))}
      </p>
    )}
    {startDate && (
      <p>
        {startDate} — {endDate ?? 'now'}
      </p>
    )}
  </li>
)

export default Card

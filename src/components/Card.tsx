import React from 'react'
import { Calendar } from 'react-feather'
import Iconed from './Iconed'

interface CardProps extends React.PropsWithChildren {
  title: React.ReactNode
  skills?: string[]
  startDate?: string
  description?: React.ReactNode
  endDate?: string
  present?: string
}

const Card = ({
  children,
  title,
  description,
  startDate,
  endDate,
  skills,
  present = 'Present',
}: CardProps): JSX.Element => (
  <li className="flex flex-col">
    <h3 className="font-normal leading-normal">{title}</h3>
    {description && (
      <p className="md:hyphens pb-2 leading-normal">{description}</p>
    )}
    {children}
    <div className="flex-grow" />
    {startDate && (
      <p className=" text-gray-500 dark:text-gray-400">
        <Iconed icon={<Calendar strokeWidth={3} />}>
          <span>{startDate}</span>
        </Iconed>{' '}
        —{' '}
        {endDate ? (
          <>
            <Iconed icon={<Calendar strokeWidth={3} />}>
              <span>{endDate}</span>
            </Iconed>
          </>
        ) : (
          present
        )}
      </p>
    )}
  </li>
)

export default Card

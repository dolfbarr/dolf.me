import React, { PropsWithChildren, ReactElement, useState } from 'react'
import Section from '../Section'
import {
  CONTACTS,
  LOCATION,
  PERSONAL_DATA,
  SOCIALS,
  WORK,
} from '../../content/data'
import { AtSign, MapPin } from 'react-feather'
import Iconed from '../Iconed'
import Heading from '../Heading'
import Clock from '../Clock'
import Button from '../Button'
import classNames from 'classnames'
import { MapContainer, TileLayer, CircleMarker } from 'react-leaflet'
import { LatLngTuple } from 'leaflet'

const Landing: React.FC = (): ReactElement => {
  const [isMapOpen, setIsMapOpen] = useState(false)

  const HeadingH1 = ({
    children,
    ...props
  }: PropsWithChildren<React.HTMLAttributes<HTMLDivElement>>): ReactElement => (
    <h1 {...props}>{children}</h1>
  )

  return (
    <Section className="group/section relative">
      <span className="align-center inline-flex flex-wrap">
        <Heading
          headingTag={HeadingH1}
          className="group/heading"
          id="greeting"
          iconSize={32}
          aside={
            <div className="absolute right-0 top-5 flex justify-between gap-4 align-baseline">
              <a
                href={CONTACTS.telegram.url}
                target="_blank"
                title={CONTACTS.telegram.title + ': ' + SOCIALS.telegram}
                rel="noreferrer noopener"
                className="hidden md:inline-block "
                data-goatcounter-click="telegram-top"
                data-goatcounter-title={CONTACTS.telegram.title}>
                {CONTACTS.telegram.icon}
              </a>
              <a
                href={`mailto:${CONTACTS.email.url}`}
                target="_blank"
                title={CONTACTS.email.title + ': ' + SOCIALS.email}
                rel="noreferrer noopener"
                className="hidden md:inline-block"
                data-goatcounter-click="email-top"
                data-goatcounter-title={CONTACTS.email.title}>
                {CONTACTS.email.icon}
              </a>
            </div>
          }>
          <span>Hi!</span>
          <br className="sm:hidden" />
          <span> I’m </span>
          {PERSONAL_DATA.fullName}{' '}
        </Heading>
        <span className="ml-4 hidden text-6xl group-hover/section:animate-bounce sm:inline-flex md:items-baseline">
          👋
        </span>
      </span>
      <p className="hyphens text-xl leading-loose">
        a <em>{PERSONAL_DATA.occupation}</em> at{' '}
        <a
          href={WORK.link}
          title={WORK.name}
          target="_blank"
          rel="noopener noreferrer">
          <Iconed icon={<AtSign />} size={14}>
            <span>{WORK.name}</span>
          </Iconed>
        </a>{' '}
        with {WORK.totalYearsOfExperience}+&nbsp;years of experience based in{' '}
        <Button
          className="group/location mr-1 text-base"
          title={LOCATION.flag + ' ' + LOCATION.title}
          onClick={() => setIsMapOpen(!isMapOpen)}>
          <Iconed icon={<MapPin />} size={14} className="relative inline-flex">
            <span className="inline-flex tracking-[.008em] opacity-100 transition-opacity group-hover/location:hidden">
              {LOCATION.title}
            </span>
            <span className="hidden group-hover/location:inline-flex">
              {LOCATION.original}
            </span>
          </Iconed>
        </Button>
        <Clock />
        {'. '}
        <span>
          I&apos;m <em>passionate about web</em> and, especially, frontend
          development. I like to be on the edge of{' '}
          <em>solving business problems</em> & appeal for users and believe that{' '}
          <em>soft skills</em> and <em>clean code</em> matter.
        </span>
      </p>
      {typeof window !== 'undefined' && (
        <div
          className={classNames(
            isMapOpen ? 'mt-4 max-h-96' : 'max-h-0',
            'map-wrapper h-96 overflow-hidden transition-[max-height]',
          )}>
          <MapContainer
            center={LOCATION.coordinates as LatLngTuple}
            zoom={5}
            className="h-96"
            zoomAnimation
            placeholder={
              <p className="flex content-center justify-center">
                Map of {LOCATION.title}.{' '}
                <noscript>
                  You need to enable JavaScript to see this map.
                </noscript>
              </p>
            }
            scrollWheelZoom={false}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <CircleMarker
              center={LOCATION.coordinates as LatLngTuple}
              radius={10}
              fillOpacity={0.25}
            />
          </MapContainer>
        </div>
      )}
      <p className="flex flex-wrap justify-center gap-2 pt-8 text-center text-xl leading-loose">
        {PERSONAL_DATA.tagLines.map((tagLine, index) => (
          <span
            key={tagLine + String(index)}
            className="flex flex-wrap justify-center gap-2">
            <span className="inline-flex">{tagLine}</span>
            {index !== PERSONAL_DATA.tagLines.length - 1 && (
              <span className="inline-flex">·</span>
            )}
          </span>
        ))}
      </p>
    </Section>
  )
}

export default Landing

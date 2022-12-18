import React, { ReactElement } from 'react'
import { HeadFC } from 'gatsby'
import Page from '../layouts/Page'

import { SEO } from '../components/SEO'
import Resume from '../components/Resume'
import Heading from '../components/Heading'
import { CONTACTS, PERSONAL_DATA, SOCIALS } from '../content/data'
import { HeadingH1 } from '../components/sections/Landing'
import Section from '../components/Section'

const ResumePage: React.FC = (): ReactElement => {
  return (
    <Page>
      <Section className="relative">
        <Heading
          headingTag={HeadingH1}
          id="fullname"
          iconSize={32}
          to="/"
          aside={
            <div className="absolute right-0 top-5 flex justify-between gap-4 align-baseline">
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
          {PERSONAL_DATA.fullName}
        </Heading>
        <Resume />
      </Section>
    </Page>
  )
}

export default ResumePage

export const Head: HeadFC = (): ReactElement => <SEO />

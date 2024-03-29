import React, { PropsWithChildren, ReactElement } from 'react'
import { Mail } from 'react-feather'
import { SOCIALS } from '../../content/data'
import Heading from '../Heading'
import Iconed from '../Iconed'
import Section from '../Section'

const Contact: React.FC<PropsWithChildren> = ({ children }): ReactElement => (
  <Section>
    <Heading id="contact">Contact me</Heading>
    <p>
      Feel free to drop me a message via email{' '}
      <a
        href={`mailto:${SOCIALS.email}`}
        title="Email"
        rel="noopener noreferrer">
        <Iconed icon={<Mail />}>{SOCIALS.email}</Iconed>
      </a>
      .
    </p>
  </Section>
)

export default Contact

import { Link } from 'gatsby'
import React from 'react'
import { Mail, Send } from 'react-feather'
import { SOCIALS } from '../../content/data'
import Heading from '../Heading'
import Iconed from '../Iconed'
import Section from '../Section'

const Contact = ({ children }): React.FC => (
  <Section>
    <Heading id="contact">Contact Information</Heading>
    <p>
      Feel free to drop me a message via email{' '}
      <a
        href={`mailto:${SOCIALS.email}`}
        title="Email"
        rel="noopener noreferrer"
      >
        <Iconed icon={<Mail />}>{SOCIALS.email}</Iconed>
      </a>{' '}
      or telegram{' '}
      <Link href={SOCIALS.telegram} title="Telegram" rel="noopener noreferrer">
        <Iconed icon={<Send />}>{SOCIALS.telegram}</Iconed>
      </Link>
      .
    </p>
  </Section>
)

export default Contact

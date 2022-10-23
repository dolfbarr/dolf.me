import React from 'react'
import { Mail, Send } from 'react-feather'
import { SOCIALS } from '../../content/data'
import Heading from '../Heading'
import Section from '../Section'

const Contact = ({ children }): React.FC => (
  <Section>
    <Heading id="contact">Contact Information</Heading>
    <p>
      Feel free to drop me a message via email{' '}
      <a
        href={`mailto:${SOCIALS.email}`}
        title="Email"
        className="inline-flex items-baseline gap-1"
        rel="noopener noreferrer"
      >
        <Mail size={12} /> {SOCIALS.email}
      </a>{' '}
      or telegram{' '}
      <a
        href={SOCIALS.telegram}
        className="inline-flex items-baseline gap-1"
        title="Telegram"
        rel="noopener noreferrer"
      >
        <Send size={12} /> {SOCIALS.telegram}
      </a>
      .
    </p>
  </Section>
)

export default Contact

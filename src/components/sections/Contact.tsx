import React from 'react'
import { Mail, Send } from 'react-feather'
import { CONTACTS } from '../../content/data'
import Heading from '../Heading'
import Section from '../Section'

const Contact = ({ children }): React.FC => (
  <Section>
    <Heading id="contact">Contact Information</Heading>
    <p>
      Feel free to drop me a message via email{' '}
      <a
        href={`mailto:${CONTACTS.email}`}
        title="Email"
        className="inline-flex items-baseline gap-1"
        rel="noopener noreferrer"
      >
        <Mail size={12} /> {CONTACTS.email}
      </a>{' '}
      or telegram{' '}
      <a
        href={CONTACTS.telegram}
        className="inline-flex items-baseline gap-1"
        title="Telegram"
        rel="noopener noreferrer"
      >
        <Send size={12} /> {CONTACTS.telegram}
      </a>
      .
    </p>
  </Section>
)

export default Contact

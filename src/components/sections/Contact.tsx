import React from 'react'
import { CONTACTS } from '../../content/data'
import Heading from '../Heading'
import Section from '../Section'

const Contact = ({ children }): React.FC => (
  <Section>
    <Heading id="contact">Contact Information</Heading>
    <p>
      Feel free to drop me a message via email{' '}
      <a href={`mailto:${CONTACTS.email}`} title="Email">
        {CONTACTS.email}
      </a>{' '}
      or telegram{' '}
      <a href={CONTACTS.telegram} title="Telegram" rel="noopener noreferrer">
        {CONTACTS.telegram}
      </a>
      .
    </p>
  </Section>
)

export default Contact

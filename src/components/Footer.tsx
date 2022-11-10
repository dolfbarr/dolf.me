import { Link } from 'gatsby'
import React from 'react'
import { CONTACTS, SOCIALS } from '../content/data'

const Footer = ({ children }): React.FC => (
  <footer>
    <section className="flex flex-wrap justify-center gap-4 text-3xl text-primary">
      {Object.keys(CONTACTS).map((key) => (
        <Link
          key={key}
          href={`${CONTACTS[key].isEmail ? 'mailto:' : ''}${CONTACTS[key].url}`}
          target="_blank"
          title={CONTACTS[key].title + ': ' + String(SOCIALS[key])}
          rel="noreferrer noopener"
          data-testid={key}
          data-goatcounter-click={key + '-event'}
          data-goatcounter-title={CONTACTS[key].title}>
          {React.cloneElement(CONTACTS[key].icon, { size: 24 })}
          <span className="sr-only">
            {CONTACTS[key].title}: {SOCIALS[key]}
          </span>
        </Link>
      ))}
    </section>
  </footer>
)

export default Footer

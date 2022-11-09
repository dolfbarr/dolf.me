import { Link } from 'gatsby'
import React from 'react'
import { CONTACTS } from '../content/data'

const Footer = ({ children }): React.FC => (
  <footer>
    <section className="flex flex-wrap justify-center gap-4 text-3xl text-primary">
      {Object.keys(CONTACTS).map((key) => (
        <Link
          key={key}
          href={`${CONTACTS[key].isEmail ? 'mailto:' : ''}${CONTACTS[key].url}`}
          target="_blank"
          title={CONTACTS[key].title}
          rel="noreferrer noopener"
        >
          {React.cloneElement(CONTACTS[key].icon, { size: 24 })}
          <span className="sr-only">{CONTACTS[key].title}</span>
        </Link>
      ))}
    </section>
  </footer>
)

export default Footer

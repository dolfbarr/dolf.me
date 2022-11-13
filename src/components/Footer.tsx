import { Link } from 'gatsby'
import React from 'react'
import { CONTACTS, SOCIALS } from '../content/data'
import packageJson from '../../package.json'
import { GitHub } from 'react-feather'
import Iconed from './Iconed'

const Footer = ({ children }): React.FC => (
  <footer>
    <section className="flex flex-wrap justify-center gap-4 pb-2 text-3xl text-primary">
      {Object.keys(CONTACTS).map((key) => (
        <Link
          key={key}
          href={`${CONTACTS[key].isEmail ? 'mailto:' : ''}${CONTACTS[key].url}`}
          target="_blank"
          title={
            CONTACTS[key].title +
            (SOCIALS[key] ? `: ${String(SOCIALS[key])}` : '')
          }
          rel="noreferrer noopener"
          data-testid={key}
          data-goatcounter-click={key + '-event'}
          data-goatcounter-title={CONTACTS[key].title}>
          {React.cloneElement(CONTACTS[key].icon, { size: 24 })}
          <span className="sr-only">
            {CONTACTS[key].title}
            {SOCIALS[key] && `: ${String(SOCIALS[key])}`}
          </span>
        </Link>
      ))}
    </section>
    <section className="flex flex-wrap justify-center gap-4">
      {' '}
      <Link
        href={packageJson.repository.url}
        target="_blank"
        rel="noreferrer noopener"
        data-goatcounter-click={'site-repositroy-url'}
        data-goatcounter-title="Site source code"
        title="Github repository">
        <Iconed icon={<GitHub size={14} />}>
          <span>Site source code</span>
        </Iconed>
      </Link>
    </section>
  </footer>
)

export default Footer

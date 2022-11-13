import React, { ReactElement } from 'react'
import { Link } from 'gatsby'
import { CONTACTS, SOCIALS } from '../content/data'
import packageJson from '../../package.json'
import { GitHub, Moon, Sun } from 'react-feather'
import Iconed from './Iconed'
import { useThemeModeContext } from '../contexts/ThemeModeProvider'

const Footer: React.FC = (): ReactElement => {
  const { isDarkTheme, changeTheme } = useThemeModeContext()
  return (
    <footer>
      <section className="flex flex-wrap justify-center gap-4 pb-4 text-3xl text-primary">
        {Object.keys(CONTACTS).map((key) => (
          <Link
            key={key}
            to={`${CONTACTS[key].isEmail ? 'mailto:' : ''}${CONTACTS[key].url}`}
            target="_blank"
            title={
              CONTACTS[key].title +
              (SOCIALS[key] ? `: ${String(SOCIALS[key])}` : '')
            }
            rel="noreferrer noopener"
            data-testid="social-link"
            data-goatcounter-click={key + '-event'}
            data-goatcounter-title={CONTACTS[key].title}>
            <Iconed icon={CONTACTS[key].icon} size={24}>
              <span className="sr-only">
                {CONTACTS[key].title}
                {SOCIALS[key] && `: ${String(SOCIALS[key])}`}
              </span>
            </Iconed>
          </Link>
        ))}
      </section>
      <section className="flex flex-wrap justify-center gap-4">
        <Link
          to={packageJson.repository.url}
          target="_blank"
          rel="noreferrer noopener"
          data-goatcounter-click={'site-repositroy-url'}
          data-goatcounter-title="Site source code"
          title="Github repository">
          <Iconed icon={<GitHub size={14} />}>
            <span>Site source code</span>
          </Iconed>
        </Link>
        <button
          onClick={changeTheme}
          data-testid="change-theme"
          className="rounded border border-primary bg-transparent px-2 text-primary transition-colors hover:border-transparent hover:bg-primary hover:text-white active:brightness-90 dark:border-primary-dark dark:text-primary-dark dark:hover:bg-primary-dark dark:hover:hover:text-white">
          <Iconed icon={isDarkTheme ? <Sun size={14} /> : <Moon size={14} />}>
            <span>Enable {isDarkTheme ? 'light' : 'dark'} theme</span>
          </Iconed>
        </button>
      </section>
    </footer>
  )
}

export default Footer

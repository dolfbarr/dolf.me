import React, { ReactElement } from 'react'
import { CONTACTS, SOCIALS } from '../content/data'
import packageJson from '../../package.json'
import { GitHub, Moon, RefreshCw, Sun } from 'react-feather'
import Iconed from './Iconed'
import { useThemeModeContext } from '../contexts/ThemeModeProvider'
import Button from './Button'

const Footer: React.FC = (): ReactElement => {
  const { isDarkTheme, changeTheme, isThemeReset, resetTheme } =
    useThemeModeContext()
  return (
    <footer>
      <section className="flex flex-wrap justify-center gap-4 pb-4 text-3xl text-primary">
        {Object.keys(CONTACTS).map((key) => (
          <a
            key={key}
            href={`${CONTACTS[key].isEmail ? 'mailto:' : ''}${
              CONTACTS[key].url
            }`}
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
          </a>
        ))}
      </section>
      <section className="flex flex-wrap justify-center gap-4">
        <a
          href={packageJson.repository.url}
          target="_blank"
          rel="noreferrer noopener"
          data-goatcounter-click={'site-repositroy-url'}
          data-goatcounter-title="Site source code"
          title="Github repository">
          <Iconed icon={<GitHub size={14} />}>
            <span>Site source code</span>
          </Iconed>
        </a>
        <Button onClick={changeTheme} data-testid="change-theme">
          <Iconed icon={isDarkTheme ? <Sun size={14} /> : <Moon size={14} />}>
            <span>Enable {isDarkTheme ? 'light' : 'dark'} theme</span>
          </Iconed>
        </Button>
        {!isThemeReset && (
          <Button onClick={resetTheme} data-testid="change-theme">
            <Iconed icon={<RefreshCw size={14} />}>
              <span>Enable auto switch for theme</span>
            </Iconed>
          </Button>
        )}
      </section>
    </footer>
  )
}

export default Footer

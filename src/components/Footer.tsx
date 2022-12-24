import React, { ReactElement, PropsWithChildren } from 'react'
import { ContactGroup, CONTACTS, SOCIALS } from '../content/data'
import packageJson from '../../package.json'
import { GitHub, Moon, Sun } from 'react-feather'
import Iconed from './Iconed'
import { useThemeModeContext } from '../contexts/ThemeModeProvider'
import Button from './Button'
import Section from './Section'
import classNames from 'classnames'
import Checkbox from './Checkbox'

const Group: React.FC<{
  contactGroup: string[]
}> = ({ contactGroup = [] }): ReactElement => (
  <div className="flex flex-wrap justify-center gap-4">
    {contactGroup.map((contactKey: string) => {
      return (
        <a
          key={contactKey}
          href={`${CONTACTS[contactKey].isEmail ? 'mailto:' : ''}${
            CONTACTS[contactKey].url
          }`}
          target="_blank"
          title={
            CONTACTS[contactKey].title +
            (SOCIALS[contactKey] ? `: ${String(SOCIALS[contactKey])}` : '')
          }
          rel="noreferrer noopener"
          data-testid="social-link"
          data-goatcounter-click={contactKey + '-event'}
          data-goatcounter-title={CONTACTS[contactKey].title}>
          <Iconed icon={CONTACTS[contactKey].icon} size={24}>
            <span className="sr-only">
              {CONTACTS[contactKey].title}
              {SOCIALS[contactKey] && `: ${String(SOCIALS[contactKey])}`}
            </span>
          </Iconed>
        </a>
      )
    })}
  </div>
)

const Footer: React.FC<{ className: string } & PropsWithChildren> = ({
  children,
  className,
}): ReactElement => {
  const { isDarkTheme, changeTheme, isThemeReset, resetTheme } =
    useThemeModeContext()

  const allContacts = Object.keys(CONTACTS)

  const socialContacts = allContacts.filter(
    (key) => CONTACTS[key].group === ContactGroup.Social,
  )
  const codeContacts = allContacts.filter(
    (key) => CONTACTS[key].group === ContactGroup.Code,
  )
  const otherContacts = allContacts.filter(
    (key) => CONTACTS[key].group === ContactGroup.Other,
  )

  return (
    <footer className={classNames('mt-8 w-full', className)}>
      <Section className="flex flex-wrap justify-evenly pb-4 text-primary">
        <Group contactGroup={otherContacts} />
        <Group contactGroup={socialContacts} />
        <Group contactGroup={codeContacts} />
      </Section>
      <Section className="flex flex-wrap justify-center gap-4 pb-2">
        <a
          href={packageJson.repository.url}
          target="_blank"
          rel="noreferrer noopener"
          data-goatcounter-click={'site-repository-url'}
          data-goatcounter-title="Site source code"
          title="Github repository">
          <Iconed icon={<GitHub />}>
            <span>Site source code</span>
          </Iconed>
        </a>
        <Button
          onClick={changeTheme}
          data-testid="change-theme"
          className="w-44">
          <Iconed icon={isDarkTheme ? <Sun /> : <Moon />}>
            <span>Enable {isDarkTheme ? 'light' : 'dark'} theme</span>
          </Iconed>
        </Button>
        <Checkbox
          data-testid="auto-switch-theme"
          onClick={resetTheme}
          disabled={isThemeReset}
          checked={isThemeReset}>
          Enable auto-switch for theme
        </Checkbox>
      </Section>
      {children}
    </footer>
  )
}

export default Footer

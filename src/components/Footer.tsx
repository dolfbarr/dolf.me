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
import { injectIntl, IntlShape } from 'gatsby-plugin-intl'
import { t } from '../utils/translate'

const Group: React.FC<{
  contactGroup: string[]
  intl: IntlShape
}> = ({ intl, contactGroup = [] }): ReactElement => (
  <div className="flex flex-wrap justify-center gap-4">
    {contactGroup.map((contactKey: string) => {
      const title = t(
        intl,
        `contacts.${contactKey}.title`,
        CONTACTS[contactKey].title,
      )

      return (
        <a
          key={contactKey}
          href={`${CONTACTS[contactKey].isEmail ? 'mailto:' : ''}${
            CONTACTS[contactKey].url
          }`}
          target="_blank"
          title={
            title +
            (SOCIALS[contactKey] ? `: ${String(SOCIALS[contactKey])}` : '')
          }
          rel="noreferrer noopener"
          data-testid="social-link"
          data-goatcounter-click={contactKey + '-event'}
          data-goatcounter-title={CONTACTS[contactKey].title}>
          <Iconed icon={CONTACTS[contactKey].icon} size={24}>
            <span className="sr-only">
              {title}
              {SOCIALS[contactKey] && `: ${String(SOCIALS[contactKey])}`}
            </span>
          </Iconed>
        </a>
      )
    })}
  </div>
)

export interface FooterProps extends PropsWithChildren {
  className: string
  intl: IntlShape
}

const Footer: React.FC<FooterProps> = ({
  children,
  className,
  intl,
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
        <Group contactGroup={otherContacts} intl={intl} />
        <Group contactGroup={socialContacts} intl={intl} />
        <Group contactGroup={codeContacts} intl={intl} />
      </Section>
      <Section className="flex flex-wrap justify-center gap-4 pb-2">
        <a
          href={packageJson.repository.url}
          target="_blank"
          rel="noreferrer noopener"
          data-goatcounter-click={'site-repository-url'}
          data-goatcounter-title="Site source code"
          title={t(intl, 'footer.sourceCodeTitle', 'Github repository')}>
          <Iconed icon={<GitHub />}>
            <span>{t(intl, 'footer.sourceCode', 'Site source code')}</span>
          </Iconed>
        </a>
        <Button
          onClick={changeTheme}
          data-testid="change-theme"
          className={intl.locale === 'ru' ? 'w-54' : 'w-44'}>
          <Iconed icon={isDarkTheme ? <Sun /> : <Moon />}>
            <span>
              {t(
                intl,
                'footer.changeTheme',
                `Enable ${isDarkTheme ? 'light' : 'dark'} theme`,
                {
                  theme: t(
                    intl,
                    isDarkTheme ? 'footer.lightTheme' : 'footer.darkTheme',
                    isDarkTheme ? 'light' : 'dark',
                  ),
                },
              )}
            </span>
          </Iconed>
        </Button>
        <Checkbox
          data-testid="auto-switch-theme"
          onChange={resetTheme}
          disabled={isThemeReset}
          checked={isThemeReset}>
          {t(intl, 'footer.themeSwitcher', 'Enable auto-switch for theme')}
        </Checkbox>
      </Section>
      {children}
    </footer>
  )
}

export default injectIntl(Footer)

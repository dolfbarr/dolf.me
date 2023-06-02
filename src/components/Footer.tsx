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

const Group: React.FC<{
  contactGroup: string[]
  intl: IntlShape
}> = ({ intl, contactGroup = [] }): ReactElement => (
  <div className="flex flex-wrap justify-center gap-4">
    {contactGroup.map((contactKey: string) => {
      const translationKey = `contacts.${contactKey}.title`
      const translation = intl.formatMessage({ id: translationKey })

      return (
        <a
          key={contactKey}
          href={`${CONTACTS[contactKey].isEmail ? 'mailto:' : ''}${
            CONTACTS[contactKey].url
          }`}
          target="_blank"
          title={
            (translation === translationKey
              ? CONTACTS[contactKey].title
              : translation) +
            (SOCIALS[contactKey] ? `: ${String(SOCIALS[contactKey])}` : '')
          }
          rel="noreferrer noopener"
          data-testid="social-link"
          data-goatcounter-click={contactKey + '-event'}
          data-goatcounter-title={CONTACTS[contactKey].title}>
          <Iconed icon={CONTACTS[contactKey].icon} size={24}>
            <span className="sr-only">
              {translation === translationKey
                ? CONTACTS[contactKey].title
                : translation}
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
          title={intl.formatMessage({ id: 'footer.sourceCodeTitle' })}>
          <Iconed icon={<GitHub />}>
            <span>{intl.formatMessage({ id: 'footer.sourceCode' })}</span>
          </Iconed>
        </a>
        <Button
          onClick={changeTheme}
          data-testid="change-theme"
          className={intl.locale === 'ru' ? 'w-54' : 'w-44'}>
          <Iconed icon={isDarkTheme ? <Sun /> : <Moon />}>
            <span>
              {intl.formatMessage(
                { id: 'footer.changeTheme' },
                {
                  theme: intl.formatMessage({
                    id: isDarkTheme ? 'footer.lightTheme' : 'footer.darkTheme',
                  }),
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
          {intl.formatMessage({ id: 'footer.themeSwitcher' })}
        </Checkbox>
      </Section>
      {children}
    </footer>
  )
}

export default injectIntl(Footer)

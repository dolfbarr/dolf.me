import { IntlShape } from 'gatsby-plugin-intl'

export const t = (intl: IntlShape, key: string, fallback = ''): string => {
  return intl.formatMessage({ id: key }) === key
    ? fallback
    : intl.formatMessage({ id: key })
}

import { IntlShape } from 'gatsby-plugin-intl'

export const t = (
  intl: IntlShape,
  key: string,
  fallback = '',
  options = {},
): string => {
  return intl.formatMessage({ id: key }, options) === key
    ? fallback
    : intl.formatMessage({ id: key }, options)
}

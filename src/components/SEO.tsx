import React, { PropsWithChildren, ReactElement } from 'react'
import { useSiteMetadata } from '../hooks/useSiteMetadata'
import { Helmet } from 'react-helmet'

export interface SEOProps extends PropsWithChildren {
  pathname?: string
  title?: string
  description?: string
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  pathname,
  children,
  intl,
}): ReactElement => {
  const {
    title: defaultTitle,
    description: defaultDescription,
    siteUrl,
    twitterUsername,
  } = useSiteMetadata()

  const seo = {
    title: title ?? defaultTitle,
    description: description ?? defaultDescription,
    url: `${String(siteUrl)}${String(pathname) || ''}`,
    twitterUsername,
  }

  return (
    <>
      <Helmet
        htmlAttributes={{
          lang: intl.locale,
        }}
      />
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:creator" content={seo.twitterUsername} />
      <link
        rel="icon"
        href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>👤</text></svg>"
      />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <script
        data-goatcounter="https://dolf.goatcounter.com/count"
        async
        src="//gc.zgo.at/count.js"
      />
      {children}
    </>
  )
}

export default injectIntl(SEO)

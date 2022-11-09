import React from 'react'
import { useSiteMetadata } from '../hooks/useSiteMetadata'

export const SEO = ({ title, description, pathname, children }): React.FC => {
  const {
    title: defaultTitle,
    description: defaultDescription,
    siteUrl,
    twitterUsername,
  } = useSiteMetadata()

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    url: `${String(siteUrl)}${String(pathname) || ''}`,
    twitterUsername,
  }

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:creator" content={seo.twitterUsername} />
      <link
        rel="icon"
        href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>👤</text></svg>"
      />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <script
        data-goatcounter="https://dolf.goatcounter.com/count"
        async
        src="//gc.zgo.at/count.js"
      />
      <noscript>
        <img src="https://dolf.goatcounter.com/count?p=/test-noscript" />
      </noscript>
      {children}
    </>
  )
}

import { graphql, useStaticQuery } from 'gatsby'

export const useSiteMetadata = (): Record<string, unknown> => {
  const data = useStaticQuery<Record<string, unknown>>(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          twitterUsername
          image
          siteUrl
        }
      }
    }
  `)

  return data.site.siteMetadata
}

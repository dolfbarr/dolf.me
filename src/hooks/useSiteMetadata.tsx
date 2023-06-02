import { graphql, useStaticQuery } from 'gatsby'

export const useSiteMetadata = (): Record<string, string> => {
  const data = useStaticQuery<
    Record<
      string,
      {
        siteMetadata: {
          title: string
          description: string
          twitterUsername: string
          siteUrl: string
        }
      }
    >
  >(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          twitterUsername
          siteUrl
        }
      }
    }
  `)

  return data.site.siteMetadata
}

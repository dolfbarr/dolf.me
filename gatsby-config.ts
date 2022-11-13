import type { GatsbyConfig } from 'gatsby'
import { LOCATION, PERSONAL_DATA } from './src/content/data'

const config: GatsbyConfig = {
  siteMetadata: {
    title: PERSONAL_DATA.fullName,
    description: `${PERSONAL_DATA.fullName}, a ${PERSONAL_DATA.occupation} based in ${LOCATION.title}`,
    twitterUsername: `@${PERSONAL_DATA.nickname}`,
    siteUrl: 'https://dolf.me',
    lang: 'en',
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-image',
    'gatsby-plugin-mdx',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
    {
      resolve: '@raae/gatsby-plugin-svg-emoji-favicon',
      options: {
        emoji: '⌨️',
      },
    },
  ],
}

export default config

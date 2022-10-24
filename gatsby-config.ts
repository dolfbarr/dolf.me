import type { GatsbyConfig } from 'gatsby'
import { LOCATION, PERSONAL_DATA } from './src/content/data'

const config: GatsbyConfig = {
  siteMetadata: {
    title: PERSONAL_DATA.fullName,
    description: `${PERSONAL_DATA.fullName}, a ${PERSONAL_DATA.occupation} based in ${LOCATION.title}`,
    twitterUsername: `@${PERSONAL_DATA.nickname}`,
    image: '/gatsby-icon.png',
    siteUrl: 'https://dolf.me',
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
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: './static/images/icon.png',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './static/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
  ],
}

export default config

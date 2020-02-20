/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'project',
        path: './data'
      },
      fonts: [
        {
          family: `Roboto Mono`,
          variants: [`400`, `700`]
        },
        {
          family: `Roboto`,
          subsets: [`latin`]
        },
      ]
    },
    'gatsby-transformer-json'
  ]
}

module.exports = {
  siteMetadata: {
    title: `Ali Taee`,
    siteUrl: `https://alitaee.com`,
    description: `Ali Taee Portfolio with Gatsby, last project, blog and work`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ali Taee Portfolio`,
        short_name: `Ali Taee`,
        start_url: `/`,
        background_color: `#003566`,
        theme_color: `#003566`,
        display: `minimal-ui`,
        icon: `src/assets/images/favicon-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}

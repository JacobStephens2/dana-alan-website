require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `content`,
        path: `${__dirname}/content/`,
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      }
    },
    `gatsby-plugin-mdx`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        sassOptions: {
          includePaths: ["scss"],
        }
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            },
          },
        ],
      },
    },
    `gatsby-remark-images`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-background-image-es5',
      options: {
        // add your own characters to escape, replacing the default ':/'
        specialChars: '/:',
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        typekit: { id: process.env.ADOBE_TYPEKIT_KEY}
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Dana Alan`,
        short_name: `Dana`,
        description: `The campaign website for Dana Alan for West Vincent Township Supervisor`,
        start_url: `/`,
        background_color: `#4abbe8`,
        theme_color: `#002447`,
        display: `standalone`,
        icon: `src/images/favicon.png`,
        lang: `en`,
        cache_busting_mode: 'none'
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/*`],
      },
    },
  ],
}

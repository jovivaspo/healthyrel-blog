/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
require("dotenv").config({
  path: `.env`,
})

const siteUrl = process.env.DOMINIO

const strapiConfig = {
  apiURL: process.env.STRAPI_API_URL,
  accessToken: process.env.STRAPI_TOKEN,
  collectionTypes: [
    {
      singularName: "article",
      queryParams: {
        populate: {
          title: "*",
          description: "*",
          slug: "*",
          thumbnail: "*",
          author: "*",
          category: "*",
          blocks: {
            populate: "*",
          },
        },
      },
    },
    { singularName: "category" },
    { singularName: "author" },
  ],
}

module.exports = {
  // pathPrefix: "/healthyrel-blog",
  siteMetadata: {
    siteUrl: `${siteUrl}`,
    title: `HealthyRel`,
    description: `Explore HealthyRel for tips, advice, and experiences on mental health, social relationships, and love. Learn to improve your emotional well-being and build strong and healthy relationships on our website.`,
  },
  plugins: [
    `gatsby-plugin-fix-fouc`,
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-strapi`,
      options: strapiConfig,
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        createLinkInHead: false,
        excludes: ["/about", "/contact", "legal-notice", "privacy-policy"],
        query: `
        {
          allSitePage {
            edges{
                 node{
                      path
                       }
                  }
           }
          }
      `,
        resolveSiteUrl: () => siteUrl,
        resolvePages: ({ allSitePage: { edges: allPages } }) => {
          return allPages.map(page => {
            return { path: page.node.path }
          })
        },
        serialize: ({ path }) => {
          return {
            url: path,
          }
        },
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: siteUrl,
        sitemap: siteUrl + "sitemap-index.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 600,
              linkImagesToOriginal: false,
              showCaptions: true,
            },
          },
          {
            resolve: `gatsby-remark-table-of-contents`,
            options: {
              exclude: "Table of Contents",
              tight: false,
              ordered: false,
              fromHeading: 2,
              toHeading: 2,
              className: "table-of-contents",
            },
          },
          `gatsby-remark-autolink-headers`,
        ],
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: `Healthyrel Blog`,
        short_name: `Healthyrel`,
        start_url: `/`,
        icon: "src/assets/images/Favicon.png",
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Bebas Neue",
              variants: ["400"],
            },
            {
              family: "Montserrat",
              variants: ["300", "400", "600"],
            },
          ],
        },
      },
    },
  ],
}

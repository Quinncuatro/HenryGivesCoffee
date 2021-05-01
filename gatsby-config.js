module.exports = {
  siteMetadata: {
    author: `Henry Quinn`,
    description: `Micro-Scholarships for Rad Web Shit`,
    keywords: `Henry, Quinn, Gives, Coffee, Web, Development, Rad, JavaScript, JS, CSS, HTML`,
    title: `Henry Gives Coffee`,
    siteUrl: `https://henrygives.coffee`,
    social: {
      github: "quinncuatro",
      linkedin: "henryquinniv",
      twitter: "quinncuatro",
    }
  },
  pathPrefix: '__GATSBY_IPFS_PATH_PREFIX__',
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-plugin-ipfs`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 300,
            },
          },
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
        ],
      },
    },
    `gatsby-remark-copy-linked-files`,
    `gatsby-remark-smartypants`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Henry Gives Coffee`,
        short_name: `Henry Gives Coffee`,
        start_url: `/`,
        background_color: `#355366`,
        theme_color: `#355366`,
        display: `standalone`,
        icon: `src/images/icon.png`, 
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://henrygives.coffee",
        sitemap: "https://henrygives.coffee/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-158941203-1",
        head: false,
        respectDNT: true,
      },
    },
    `gatsby-plugin-netlify`,
    `gatsby-plugin-offline`,
    `gatsby-transformer-yaml`,
  ],
}
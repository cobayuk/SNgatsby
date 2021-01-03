module.exports = {
  siteMetadata: {
    title: `Sungnikah`,
    description: `Sungnikah merupakan penyedia jasa tetek bengek pernikahan seperti desain jada pembuatan wedding website, jada desain seserahan, dan desain undangan.`,
    author: `Dimas Prasetyo & Arie Aditya Nugraha`,
    siteUrl: `https://sungnikah.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-186269195-1",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
  ],
}

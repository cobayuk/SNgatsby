module.exports = {
  siteMetadata: {
    title: `Sungnikah`,
    author: `Dimas Prasetyo & Arie Aditya Nugraha`,
    siteUrl: `https://sungnikah.com`,
    SEO: {
      description: `Sungnikah merupakan penyedia jasa tetek bengek pernikahan seperti desain jada pembuatan wedding website, jada desain seserahan, dan desain undangan.`,
      robots: `index, follow`,
      keywords: `Buat undangan, Jasa Undangan Digital, Undangan Digital Keren, Undangan Unik, Undangan Kreatif 2021`,
      index: `2021`,
      canonical: `https://sungnikah.com/articles`
    }
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

const path = require('path');
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Sungnikah`,
    author: `Dimas Prasetyo & Arie Aditya Nugraha`,
    siteUrl: `https://sungnikah.com`,
    seo: {
      description: `Sungnikah merupakan penyedia jasa tetek bengek pernikahan seperti desain jada pembuatan wedding website, jada desain seserahan, dan desain undangan souvenir dan vendor pernikahan.`,
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
    `gatsby-plugin-smoothscroll`,
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
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Oxygen`,
          `sans-serif:700`// you can also specify font weights and styles
        ],
        display: 'swap'
      }
    },
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
        threshold: 1, // Percentage of an element's area that needs to be visible to launch animation
        once: true, // Defines if animation needs to be launched once
        disable: false, // Flag for disabling animations

        // Advanced Options
        selector: '[data-sal]', // Selector of the elements to be animated
        animateClassName: 'sal-animate', // Class name which triggers animation
        disabledClassName: 'sal-disabled', // Class name which defines the disabled state
        rootMargin: '0% 50%', // Corresponds to root's bounding box margin
        enterEventName: 'sal:in', // Enter event name
        exitEventName: 'sal:out', // Exit event name
      }
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@components": path.resolve(__dirname, 'src/components'),
          "@pages": path.resolve(__dirname, 'src/pages'),
          "@assets": path.resolve(__dirname, 'src/assets'),
          "@images": path.resolve(__dirname, 'src/images'),
          "@mocking": path.resolve(__dirname, 'src/mocking'),
          "@styles": path.resolve(__dirname, 'src/styles'),
        },
        extensions: [
          "js"
        ]
      }
    },
    {
      resolve: `gatsby-source-custom`,
      options: {
        apiKey: process.env.API_KEY,
      },
    },
  ],
}

/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

 import React from "react";
 import PropTypes from "prop-types";
 import Helmet from "react-helmet";
 import { useStaticQuery, graphql } from "gatsby";
 import icon from '@assets/favicon/sungnikah-48x48.png';

 function SEO({ description, lang, meta, keywords, title }) {
   const { site } = useStaticQuery(
     graphql`
       query {
         site {
           siteMetadata {
             title
             author
             seo {
               description
               keywords
               canonical
             }
           }
         }
       }
     `
   )

   const metaTitle = "The Wedding of Wibi & Adelia"
   const metaDescription = "The Wedding of Wibi & Adelia"
   const metaKeywords = keywords || site.siteMetadata.seo.keywords

   return (
     <Helmet
       htmlAttributes={{
         lang,
       }}
       title={metaTitle}
       meta={[
         {
           name: `description`,
           content: metaDescription,
         },
         {
           name: `keywords`,
           content: metaKeywords,
         },
         {
           property: `og:title`,
           content: title,
         },
         {
           property: `og:description`,
           content: metaDescription,
         },
         {
           property: `og:type`,
           content: `website`,
         },
         {
           name: `twitter:card`,
           content: `summary`,
         },
         {
           name: `twitter:creator`,
           content: site.siteMetadata.author,
         },
         {
           name: `twitter:title`,
           content: title,
         },
         {
           name: `twitter:description`,
           content: metaDescription,
         },
         {
           name: `google-site-verification`,
           content: 'x2eaeqaf_8ChuMCm8FCe7Vv4eER50NLgqg1a214yh_s',
         }
       ]
       .concat(
         keywords.length > 0
           ? {
               name: `keywords`,
               content: keywords.join(`, `),
             }
           : []
       )
       .concat(meta)}
       link={[
         {
           "rel": "icon",
           "type": "image/png",
           "href": `${icon}`
         },
       ]}
     />
   )
 }

 SEO.defaultProps = {
   lang: `en`,
   meta: [],
   robots: '',
   keywords: [],
 }

 SEO.propTypes = {
   description: PropTypes.string,
   lang: PropTypes.string,
   meta: PropTypes.array,
   keywords: PropTypes.arrayOf(PropTypes.string),
   title: PropTypes.string,
 }

 export default SEO

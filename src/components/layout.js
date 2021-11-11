/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { Container } from '@material-ui/core';
import { StaticQuery, graphql } from "gatsby";
import Footer from "@components/Footer/Footer";

const Layout = ({ children }) => (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <>
          <Container>
            <main>{children}</main>
          </Container>
          <Footer siteTitle={data.site.siteMetadata.title} />
        </>
      )}
    />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

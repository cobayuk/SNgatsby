import React from "react";
import GlobalStyle from "../styles/global/globalStyled";
import Layout from "@components/layout";
import SEO from "@components/seo";
import Header from "@components/header";
import Content from "@components/content";

const IndexPage = () => (
  <>
    <GlobalStyle />
    <Layout>
      <Header />
      <SEO />
      <Content />
    </Layout>
  </>
)

export default IndexPage

import React from "react";
import Layout from "@components/layout";
import SEO from "@components/seo";
import Header from "@components/Header/Header";
import Content from "@components/Content/Content";

const IndexPage = () => (
  <>
    <Layout>
      <Header/>
      <SEO/>
      <Content/>
    </Layout>
  </>
)

export default IndexPage

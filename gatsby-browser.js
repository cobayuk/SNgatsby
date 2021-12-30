import React from "react";
import Layout from "./src/components/layout";

export const wrapRootElement = ({ element, props }) => {
  return (
    <>
      <Layout {...props}>
        {element}
      </Layout>
    </>
  );
}

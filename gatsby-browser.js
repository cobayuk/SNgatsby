import React from "react";
import GlobalStyle from "./src/styles/global/globalStyled";

export const wrapRootElement = ({ element, props }) => {
  return (
    <>
      <GlobalStyle/>
      {element}
    </>
  );
}

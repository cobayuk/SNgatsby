import React from "react";
import PropTypes from "prop-types";
import { COLORS, BORDER_RADIUS, GRADIENT } from "@styles/constants";
import "@styles/button.css"

const Button = ({ children }) => (
  <button
    style={{
      padding: ".5rem 2.5rem",
      color: COLORS.lightWhite,
      fontWeight: 700,
      background: GRADIENT,
      borderRadius: BORDER_RADIUS,
      borderWidth: 0,
      cursor: "pointer",
    }}
  >
    {children}
  </button>
)

Button.propTypes = {
  children: PropTypes.any.isRequired
}

export default Button

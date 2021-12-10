import React from "react";
import PropTypes from "prop-types";
import {
  Button
} from '@material-ui/core';
import {
  COLORS,
  BORDER_RADIUS,
  FONT_SIZE,
  FONT_FAMILY
}
from "@styles/constants";
import styled from 'styled-components';

export const OrderNow = styled(Button)`
  color: ${COLORS.white};
  width: 162px;
  border: 5px solid #f7e8e1;
  height: 50px;
  display: flex;
  font-size: ${FONT_SIZE.font15};
  font-family: ${FONT_FAMILY.oxygen};
  font-weight: bold;
  border-radius: ${BORDER_RADIUS.radius30};
  text-transform: capitalize;
  background-color: #F2A76D;
  &:hover {
    color: #F2A76D;
    border: 5px solid #F2A76D;
    background-color: ${COLORS.white};
  }
  @media (min-width: 320px) and (max-width: 360px) {
    width: 108px;
    height: 39px;
    font-size: ${FONT_SIZE.font9};
  }
  @media (min-width: 375px) and (max-width: 768px) {
    width: 119px;
    height: 41px;
    font-size: ${FONT_SIZE.font10};
  }
`;

const ButtonOrderNow = ({ children }) => {
  return (
    <OrderNow>
      {children}
    </OrderNow>
  );
}

ButtonOrderNow.propTypes = {
  children: PropTypes.any.isRequired
}

export default ButtonOrderNow;

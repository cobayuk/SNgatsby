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

export const OrderNow = styled.a`
  text-decoration: none;
  cursor: pointer;
  text-align: center;
  display: block;
  width: 162px;
  border: 5px solid #f7e8e1;
  height: 50px;
  span {
    color: ${COLORS.white};
    font-size: ${FONT_SIZE.font15};
    font-family: ${FONT_FAMILY.oxygen};
    font-weight: bold;
    top: 8px;
    position: relative;
    &:hover {
      color: #F2A76D;
    }
  }
  border-radius: ${BORDER_RADIUS.radius30};
  text-transform: capitalize;
  background-color: #F2A76D;
  &:hover {
    background-color: ${COLORS.white};
    span {
      color: #F2A76D;
    }
  }
  @media (min-width: 320px) and (max-width: 360px) {
    width: 108px;
    height: 39px;
    span {
      font-size: ${FONT_SIZE.font9};
      top: 2px;
      position: relative;
      &:hover {
        color: #F2A76D;
      }
    }
  }
  @media (min-width: 375px) and (max-width: 768px) {
    width: 119px;
    height: 41px;
    span {
      font-size: ${FONT_SIZE.font10};
      top: 3px;
      position: relative;
      &:hover {
        color: #F2A76D;
      }
    }
  }
`;

const ButtonOrderNow = ({ children }) => {
  return (
    <OrderNow href="https://wa.me/6287872136170?text=Halo%20Tim Sungnikah%2C%20saya%20ingin%20bertanya" target="_blank">
      {children}
    </OrderNow>
  );
}

ButtonOrderNow.propTypes = {
  children: PropTypes.any.isRequired
}

export default ButtonOrderNow;

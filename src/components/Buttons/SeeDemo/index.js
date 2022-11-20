import React from "react";
import PropTypes from "prop-types";
import {
  COLORS,
  BORDER_RADIUS,
  FONT_SIZE,
  FONT_FAMILY
}
from "@styles/constants";
import { Link as LinkTo } from "gatsby";
import styled from 'styled-components';

export const SeeDemo = styled(LinkTo)`
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

const ButtonSeeDemo = ({ children }) => {
  return (
    <SeeDemo to="/demo/portofolio">
      {children}
    </SeeDemo>
  );
}

ButtonSeeDemo.propTypes = {
  children: PropTypes.any.isRequired
}

export default ButtonSeeDemo;

import React from "react";
import {
  Button,
  makeStyles
} from '@material-ui/core';
import {
  COLORS,
  BORDER_RADIUS,
  FONT_SIZE,
  FONT_FAMILY
}
from "../../../styles/constants";

const useStyles = makeStyles(() => ({
  root: {
    top: 50,
    width: '162px',
    height: '50px',
    backgroundColor: '#F2A76D',
    borderRadius: BORDER_RADIUS.radius30,
    display: 'flex',
    fontFamily: FONT_FAMILY.oxygen,
    color: `${COLORS.white}`,
    fontWeight: 'bold',
    fontSize: FONT_SIZE.font15,
    border: `5px solid #f7e8e1`,
    textTransform: 'capitalize'
  }
}));

const ButtonOrderNow = ({ children }) => {
  const classes = useStyles();
  return (
    <Button className={classes.root}>
      {children}
    </Button>
  );
}

export default ButtonOrderNow;

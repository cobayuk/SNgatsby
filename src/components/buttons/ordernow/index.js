import React from "react";
import {
  Button,
  makeStyles
} from '@material-ui/core';
import {
  COLORS,
  BORDER_RADIUS,
  GRADIENT
  }
from "../styles/constants";

const useStyles = makeStyles((theme) => ({
  root: {
    fontSize: 12,
    backgroundColor: COLORS.black
  }
}));

const ButtonOrderNow = (children) => {
  const classes = useStyles();
  return (
    <Button className={classes.root}>
      {children}
    </Button>
  );
}

export default ButtonOrderNow;

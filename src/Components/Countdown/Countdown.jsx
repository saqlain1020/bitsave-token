import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import Count from "react-countdown";

const useStyles = makeStyles((theme) => ({
  root: {
    color: "white",
    fontSize: 40,
    fontWeight: 100,
    letterSpacing: 10,
  },
  text: {
    marginTop: 10,
    fontWeight: 300,
  },
}));

const Countdown = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Count date={Date.now() + 100000} />
      <Typography color="secondary" className={classes.text}>
        &nbsp;&nbsp;&nbsp;Days&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        Hours&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        Minutes&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Seconds
      </Typography>
    </div>
  );
};

export default Countdown;

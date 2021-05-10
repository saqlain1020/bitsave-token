import React from "react";
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
      marginTop:10,
  },
  heading: {
    fontFamily: theme.fonts.quicksand,
    fontWeight: 400,
    fontSize:30,    
    letterSpacing: 2,
    transform:"translateY(-55px)"
  },
  bg: {
    fontWeight: 800,
    letterSpacing: 3,
    background: `linear-gradient( ${theme.palette.secondary.light} -50%,${theme.palette.secondary.main} 80%)`,
    opacity:.3,
    "-webkit-background-clip": "text",
    textFillColor: "transparent",
    [theme.breakpoints.down('xs')]:{
        fontSize:70,
    }
  },
}));

const TitleHeading = ({ background, heading }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography align="center" variant="h1" className={classes.bg}>
        {background}
      </Typography>
      <Typography
        color="primary"
        align="center"
        className={classes.heading}
      >
        <b>{heading}</b>
      </Typography>
    </div>
  );
};

export default TitleHeading;

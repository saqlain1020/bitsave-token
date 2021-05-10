import React from "react";
import { Container, Grid, Hidden, makeStyles, Typography } from "@material-ui/core";
import TitleHeading from "./../../Components/TitleHeading/TitleHeading";
import Image from "src/Assets/images/features.png";

const useStyles = makeStyles((theme) => ({
  root: {},
  container: {
    paddingTop: 0,
    postion:"relative",
    top:-100  ,
    [theme.breakpoints.down('sm')]:{
        top:-400  ,
    }
  },
  dot: {
    background: theme.palette.primary.main,
    border: "2px solid white",
    borderRadius: 360,
    height: 15,
    width: 15,
  },
  grid:{
    [theme.breakpoints.down('sm')]:{
        // position:"absolute",
        // top:-100
        // top:0,
    }
  },
  line: {
    height: 70,
    backgroundColor: "white",
    width: 2,
  },
  item:{
      [theme.breakpoints.down('sm')]:{
          transform: "none !important"
      }
  }
}));

const Features = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="lg" className={classes.root}>
      <TitleHeading heading="FEATURES" background="CORE FEATURES" />
      <div className={classes.container}>
        <Grid
          container
          spacing={2}
          justify="center"
          alignContent="center"
          alignItems="center"
          className={classes.grid}
        >
          <Grid item xs={6} md={3} className={classes.item} style={{transform:"translateY(200px)"}}>
            <Typography align="center" style={{ fontSize: 16, }} color="primary">
              Automatic Liquidity Generation
            </Typography>
            <Typography
              color="secondary"
              align="center"
              style={{ marginTop: 10, marginBottom: 10 }}
            >
              Every trade contributes toward automatically generating liquidity
              locked inside PancakeSwap LP.
            </Typography>
            <div className="center" style={{ flexFlow: "column" }}>
              <div className={classes.dot} />
              <div className={classes.line} />
            </div>
          </Grid>
        
          <Grid item xs={6} md={3} className={classes.item} style={{transform:"translateY(100px)"}}>
            <Typography align="center" style={{ fontSize: 16 }} color="primary">
              Automatic Liquidity Generation
            </Typography>
            <Typography
              color="secondary"
              align="center"
              style={{ marginTop: 10, marginBottom: 10 }}
            >
              Every trade contributes toward automatically generating liquidity
              locked inside PancakeSwap LP.
            </Typography>
            <div className="center" style={{ flexFlow: "column" }}>
              <div className={classes.dot} />
              <div className={classes.line} />
            </div>
          </Grid>
        
          <Grid item xs={6} md={3} className={classes.item} style={{transform:"translateY(100px)"}}>
            <Typography align="center" style={{ fontSize: 16 }} color="primary">
              Automatic Liquidity Generation
            </Typography>
            <Typography
              color="secondary"
              align="center"
              style={{ marginTop: 10, marginBottom: 10 }}
            >
              Every trade contributes toward automatically generating liquidity
              locked inside PancakeSwap LP.
            </Typography>
            <div className="center" style={{ flexFlow: "column" }}>
              <div className={classes.dot} />
              <div className={classes.line} />
            </div>
          </Grid>
        
          <Grid item xs={6} md={3} className={classes.item} style={{transform:"translateY(200px)"}}>
            <Typography align="center" style={{ fontSize: 16 }} color="primary">
              Automatic Liquidity Generation
            </Typography>
            <Typography
              color="secondary"
              align="center"
              style={{ marginTop: 10, marginBottom: 10 }}
            >
              Every trade contributes toward automatically generating liquidity
              locked inside PancakeSwap LP.
            </Typography>
            <div className="center" style={{ flexFlow: "column" }}>
              <div className={classes.dot} />
              <div className={classes.line} />
            </div>
          </Grid>
        
        </Grid>
        <Hidden  smDown>
        <img src={Image} width="100%" />
        </Hidden>
      </div>
    </Container>
  );
};

export default Features;

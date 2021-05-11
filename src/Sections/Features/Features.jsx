import React from "react";
import {
  Container,
  Grid,
  Hidden,
  makeStyles,
  Typography,
} from "@material-ui/core";
import TitleHeading from "./../../Components/TitleHeading/TitleHeading";
import Image from "src/Assets/images/features.png";

const useStyles = makeStyles((theme) => ({
  root: {},
  container: {
    paddingTop: 0,
    postion: "relative",
    top: -100,
    [theme.breakpoints.down("sm")]: {
      top: -400,
    },
  },
  dot: {
    background: theme.palette.primary.main,
    border: "2px solid white",
    borderRadius: 360,
    height: 15,
    width: 15,
  },
  grid: {},
  line: {
    height: 70,
    backgroundColor: "white",
    width: 2,
  },
  item: {
    [theme.breakpoints.down("sm")]: {
      transform: "none !important",
    },
  },
}));

const Features = () => {
  const classes = useStyles();

  return (
    <Container id='features' maxWidth="lg" className={classes.root}>
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
          <Grid
            item
            xs={6}
            md={3}
            className={classes.item}
            style={{ transform: "translateY(200px)" }}
          >
            <Typography align="center" style={{ fontSize: 16 }} color="primary">
              Transparency and Trust
            </Typography>
            <Typography
              color="secondary"
              align="center"
              style={{ marginTop: 10, marginBottom: 10 }}
            >
              We utilize blockchain to assure in transparency 
              and trust between buyers and sellers with provide guaranteed.
            </Typography>
            <div className="center" style={{ flexFlow: "column" }}>
              <div className={classes.dot} />
              <div className={classes.line} />
            </div>
          </Grid>

          <Grid
            item
            xs={6}
            md={3}
            className={classes.item}
            style={{ transform: "translateY(100px)" }}
          >
            <Typography align="center" style={{ fontSize: 16 }} color="primary">
              Automatic Liquidity Generation
            </Typography>
            <Typography
              color="secondary"
              align="center"
              style={{ marginTop: 10, marginBottom: 10 }}
            >
              Every trade contributes toward automatically generating liquidity
              locked inside Uniswap LP.
            </Typography>
            <div className="center" style={{ flexFlow: "column" }}>
              <div className={classes.dot} />
              <div className={classes.line} />
            </div>
          </Grid>

          <Grid
            item
            xs={6}
            md={3}
            className={classes.item}
            style={{ transform: "translateY(100px)" }}
          >
            <Typography align="center" style={{ fontSize: 16 }} color="primary">
              Static Rewards
            </Typography>
            <Typography
              color="secondary"
              align="center"
              style={{ marginTop: 10, marginBottom: 10 }}
            >
              Holders earn passive rewards through static 
              reflection as they watch their balance 
              of BitSafe grow indefinitely.
            </Typography>
            <div className="center" style={{ flexFlow: "column" }}>
              <div className={classes.dot} />
              <div className={classes.line} />
            </div>
          </Grid>

          <Grid
            item
            xs={6}
            md={3}
            className={classes.item}
            style={{ transform: "translateY(200px)" }}
          >
            <Typography align="center" style={{ fontSize: 16 }} color="primary">
              Community-Driven
            </Typography>
            <Typography
              color="secondary"
              align="center"
              style={{ marginTop: 10, marginBottom: 10 }}
            >
              BitSafe is crowdfunded by the people. The BitSafe 
              community & all the holders will have a say on 
              future implementations on the protocol.
            </Typography>
            <div className="center" style={{ flexFlow: "column" }}>
              <div className={classes.dot} />
              <div className={classes.line} />
            </div>
          </Grid>
        </Grid>
        <Hidden smDown>
          <img src={Image} width="100%" alt="features" />
        </Hidden>
      </div>
    </Container>
  );
};

export default Features;

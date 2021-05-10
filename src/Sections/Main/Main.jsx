import React from "react";
import {
  Button,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import Bg from "src/Assets/images/background-mask.png";
import Balance from "src/Components/Balance/Balance";
import Countdown from "src/Components/Countdown/Countdown";

const useStyles = makeStyles((theme) => ({
  root: {
    background: `url(${Bg})`,
    backgroundSize: "cover",
    minHeight: "calc(100vh - 60px)",
  },
  mainHeading: {
    fontWeight: 300,
    paddingTop: 150,
    [theme.breakpoints.down('xs')]:{
      paddingTop: 50,
    }
  },
  para: {
    margin: "auto",
    marginTop: 20,
    maxWidth: 670,
    letterSpacing: 1,
  },
  iconsContainer: {
    display: "flex",
    justifyContent: "flex-end",
    marginTop: 150,
  },
  icon: {
    color: theme.palette.secondary.light,
    marginRight: 20,
    cursor: "pointer",
  },
}));

const Main = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root} maxWidth="lg">
      <div>
        <Typography
          variant="h4"
          color="primary"
          align="center"
          className={classes.mainHeading}
        >
          WORLD'S PREMIERE DECENTRALIZED HIGH YIELDING COIN
        </Typography>
        <Typography color="secondary" align="center" className={classes.para}>
          BitSafe ICO is offering the crypto users a simple, easy and fast means
          to manage their money and crypto portfolio along with sending
          payments. Flat currency banks offer .5-1.4% interest per annum, SAFE
          allows for 4% per annum while having the coin itself
        </Typography>
        <center>
          <Button variant="contained" color="primary" style={{ marginTop: 40 }}>
            Buy on Pancake Swap
          </Button>
        </center>
        <Grid container spacing={2}>
          {/* Balance */}
          <Grid item xs={12} sm={6}>
            <Balance />
          </Grid>
          {/* Countdown */}
          <Grid
            item
            xs={12}
            sm={6}
            style={{
              paddingTop: 100,
              display: "flex",
              alignItems: "flex-end",
              flexFlow: "column",
            }}
          >
            <div>
              <Typography color="secondary" style={{ fontWeight: 500 }}>
                PRESALE ENDS IN
              </Typography>
              <Countdown />
            </div>
          </Grid>
          <Grid item xs={12} className={classes.iconsContainer}>
            <i className={"fab fa-facebook-f" + " " + classes.icon}></i>
            <i className={"fab fa-twitter" + " " + classes.icon}></i>
            <i className={"fab fa-youtube" + " " + classes.icon}></i>
            <i className={"fab fa-github" + " " + classes.icon}></i>
            <i className={"fab fa-bitcoin" + " " + classes.icon}></i>
            <i className={"fab fa-medium-m" + " " + classes.icon}></i>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

export default Main;

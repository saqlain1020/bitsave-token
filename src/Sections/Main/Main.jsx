import React from "react";
import { Button, Container, makeStyles, Typography } from "@material-ui/core";
import Bg from "src/Assets/images/background-mask.png";

const useStyles = makeStyles((theme) => ({
  root: {
    background: `url(${Bg})`,
    backgroundSize: "cover",
  },
  mainHeading: {
    fontWeight: 300,
    paddingTop: 150,
  },
  para:{
      margin:"auto",
      marginTop:20,
      maxWidth:670,
      letterSpacing:1,
  }
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
            <Button variant="contained" color="primary" style={{marginTop:20,}}>
                Buy on Pancake Swap
            </Button>
        </center>
      </div>
    </Container>
  );
};

export default Main;

import React from "react";
import { Container, Grid, makeStyles, Typography } from "@material-ui/core";
import TitleHeading from "./../../Components/TitleHeading/TitleHeading";
import Image from "src/Assets/images/business.png"

const useStyles = makeStyles((theme) => ({
  root: {
      marginBottom:20,
  },
}));

const Business = () => {
  const classes = useStyles();

  return (
    <Container id='business' maxWidth="lg" className={classes.root}>
      <TitleHeading heading="BUSINESS MODEL" background="WHAT AND HOW" />
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} style={{marginTop:20,}}>
          <Typography variant="h5" color="primary">
            Business Model: BitSafe (SAFE)
          </Typography>
          <Typography color="secondary" style={{marginTop:20,}}>
            The BitSafe Coin (SAFE) will be used to pay for any fees on the
            developing platform. This fees could be merchant fees, withdrawal
            fees, exchange fees, and buying or selling fees among other ones,
            otherwise known as Gas. <br/><br/>Moreover, through the incentive of 50
            percent discount for using SAFE to pay for fees, the users will be
            further driven to use its native token.<br/><br/> BitSafe will also be using
            25% percent of its annual profits to buy back SAFE tokens. It will
            burn 10% of buy back tokens, and utilize the remaining for coin
            holder interest payments and liquidity.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} className="center">
            <img src={Image} alt="business" width="80%" style={{margin:"auto"}}/>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Business;

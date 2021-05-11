import React from "react";
import { makeStyles, Container, Typography, Grid } from "@material-ui/core";
import TitleHeading from "src/Components/TitleHeading/TitleHeading";
import { PieChart } from "react-minimal-pie-chart";

const useStyles = makeStyles((theme) => ({
  root: {},
  para: {
    maxWidth: 600,
    margin: "auto",
    position: "relative",
    top: -40,
  },
  fontText: {
    fontFamily: theme.fonts.quicksand,
    fontWeight: 600,
    fontSize: 20,
  },
}));
const data = [
  { color: "#f42f54", title: "50%", date: "PUBLIC SALE/SWAP TOKENS" },
  { color: "#a963ff", title: "20%", date: "BURNED" },
  { color: "#ff8d87", title: "10%", date: "PRESALE" },
  { color: "#43c454", title: "5%", date: "RESERVE FUNDS" },
  { color: "#f5a946", title: "5%", date: "TEAM & FOUNDERS" },
  { color: "#bd8132", title: "10%", date: "DEVELOPMENT COST" },
];
const Tokens = () => {
  const classes = useStyles();

  return (
    <Container id='tokenomics' maxWidth="lg" className={classes.root}>
      <TitleHeading heading="TOKENS" background="TOKEN DETAILS" />
      <Typography align="center" color="secondary" className={classes.para}>
        The ever popular and most commonly used blockchain Ethereum is being
        opted by BitSafe meaning SAFE tokens will be ERC-20 tokens.
        <br />
        <br />
        BitSafe is entering the market with an exchange to be developed that
        allows the users to not only manage their Bitsafe crypto and generate
        annual interest but also trade them on the exchange platform. Moreover,
        it further enables the instant and lower cost transactions along with
        allowing coin holders to receive 4% interest on their wallets annually.
        With its product in the beta phase and focus on the security, the
        project is coming with a unique “savings account” similarity, that
        allows for the coin to appreciate in coin value as it pays you interest.
        <br />
        <br />
        BitSafe ICO is in its earliest of stages with its crowdsale coming on.
        So, there is a long road ahead of the project with many milestones
        coming in the form of exchange launch, along with investment and staking
        services that can provide it an edge over others.
      </Typography>
      <Typography align="center" color="secondary" style={{ marginTop: 30 }}>
        Breakdown of our token recepients
      </Typography>
      <Grid container spacing={2} style={{ marginTop: 30 }}>
        <Grid item xs={12} sm={6}>
          <Grid container spacing={2} justify="center">
            {data.map((item) => (
              <Grid item xs={6} className="center">
                <div
                  style={{
                    borderLeft: `3px solid ${item.color}`,
                    paddingLeft: 10,
                    width: 180,
                    marginBottom: 10,
                  }}
                >
                  <Typography color="secondary">{item.title}</Typography>
                  <Typography color="primary" className={classes.fontText}>
                    {item.date}
                  </Typography>
                </div>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6} className="center">
          <PieChart
            style={{ width: "80%", maxWidth: 400 }}
            data={[
              { title: "20%", value: 20, color: "#a963ff" },
              { title: "50%", value: 50, color: "#f42f54" },
              { title: "10%", value: 10, color: "#ff8d87" },
              { title: "5%", value: 5, color: "#43c454" },
              { title: "5%", value: 5, color: "#f5a946" },
              { title: "10%", value: 10, color: "#bd8132" },
            ]}
          // radius={PieChart.defaultProps.radius - shiftSize}
          // segmentsShift={(index) => (index === 0 ? shiftSize : 0.5)}
          // label={({ dataEntry }) => dataEntry.value}
          // labelStyle={{
          //   ...defaultLabelStyle,
          // }}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Tokens;

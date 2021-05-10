import React from "react";
import { makeStyles, Container, Typography } from "@material-ui/core";
import TitleHeading from "src/Components/TitleHeading/TitleHeading";
import Timeline from "./../../Components/Timeline/Timeline";

const useStyles = makeStyles((theme) => ({
  root: {},
  heading: {
    maxWidth: 500,
    margin: "auto",
    position: "relative",
    top: -40,
  },
}));

const Roadmap = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="lg" className={classes.root}>
      <TitleHeading heading="ROADMAP" background="TIMELINE" />
      <Typography color="secondary" align="center" className={classes.heading}>
        BitSafe is developing a global data-driven platform for the world.
        Powered by blockchain and smart contracts.
      </Typography>
      {/* Timeline */}
      <div>
        <Timeline />
      </div>
    </Container>
  );
};

export default Roadmap;

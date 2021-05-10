import React from "react";
import { Container, Hidden, makeStyles, Typography } from "@material-ui/core";
import Logo from "src/Assets/images/logofull.png";

const useStyles = makeStyles((theme) => ({
  grid: {
    height: 60,
    // border: "1px solid red",
    display: "grid",
    gridTemplateColumns: "min-content 1fr repeat(6,min-content)",
    alignItems: "center",
  },
  link: {
    cursor: "pointer",
    fontSize: 14,
    whiteSpace: "pre",
    marginLeft: 20,
    "&:hover": {
      opacity: 0.8,
    },
  },
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <div className={classes.grid}>
          <img height="80%" src={Logo} alt="bitsave" />
          <div />
          <Hidden xsDown>
            <Typography className={classes.link} color="secondary">
              Home
            </Typography>
            <Typography className={classes.link} color="secondary">
              Business Model
            </Typography>
            <Typography className={classes.link} color="secondary">
              Features
            </Typography>
            <Typography className={classes.link} color="secondary">
              Tokenomics
            </Typography>
            <Typography className={classes.link} color="secondary">
              Roadmap
            </Typography>
            <Typography className={classes.link} color="secondary">
              Contact
            </Typography>
          </Hidden>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;

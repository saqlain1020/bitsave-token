import React from "react";
import {
  Container,
  Hidden,
  makeStyles,
  Typography,
  Button,
  IconButton,
} from "@material-ui/core";
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
  menuIco: {
    color: "white",
  },
  drawer: {
    position: "fixed",
    top: 0,
    right: 0,
    height: "100%",
    width: 0,
    zIndex: 99,
    background: "rgba(0,0,0,0.9)",
    paddingTop: 10,
    paddingLeft: 10,
    transition: "all 300ms ease-in-out",
    "& a": {
      height: 50,
      display: "block",
      padding: 10,
      "& p": {
        color: `${theme.palette.primary.main} !important`,
      },
    },
  },
  drawerOpen: {
    width: 200,
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <div className={classes.grid}>
          <img height="80%" src={Logo} alt="bitsave" />
          <div />
          <Hidden smUp>
            <IconButton onClick={() => setOpen(true)}>
              <i className={`fas fa-ellipsis-v ${classes.menuIco}`}></i>
            </IconButton>
            <div className={`${classes.drawer} ${open&&classes.drawerOpen}`}>
              <IconButton onClick={() => setOpen(false)}>
                <i className={`fas fa-times ${classes.menuIco}`}></i>
              </IconButton>
              <a href="#home">
                <Typography className={classes.link} color="secondary">
                  Home
                </Typography>
              </a>
              <a href="#business">
                <Typography className={classes.link} color="secondary">
                  Business Model
                </Typography>
              </a>
              <a href="#features">
                <Typography className={classes.link} color="secondary">
                  Features
                </Typography>
              </a>
              <a href="#tokenomics">
                <Typography className={classes.link} color="secondary">
                  Tokenomics
                </Typography>
              </a>
              <a href="#roadmap">
                <Typography className={classes.link} color="secondary">
                  Roadmap
                </Typography>
              </a>
              <a href="#contact">
                <Typography className={classes.link} color="secondary">
                  Contact
                </Typography>
              </a>
            </div>
          </Hidden>
          <Hidden xsDown>
            <a href="#home">
              <Typography className={classes.link} color="secondary">
                Home
              </Typography>
            </a>
            <a href="#business">
              <Typography className={classes.link} color="secondary">
                Business Model
              </Typography>
            </a>
            <a href="#features">
              <Typography className={classes.link} color="secondary">
                Features
              </Typography>
            </a>
            <a href="#tokenomics">
              <Typography className={classes.link} color="secondary">
                Tokenomics
              </Typography>
            </a>
            <a href="#roadmap">
              <Typography className={classes.link} color="secondary">
                Roadmap
              </Typography>
            </a>
            <a href="#contact">
              <Typography className={classes.link} color="secondary">
                Contact
              </Typography>
            </a>
          </Hidden>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;

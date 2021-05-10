import React from "react";
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    // maxWidth:600,
    width: "100%",
    marginTop: 50,
  },
  slide: {
    height: 4,
    borderRadius: 360,
    background: "rgb(152,174,208)",
    position: "relative",
  },
  subSlide: {
    width: "38%",
    height: "100%",
    background: theme.palette.primary.main,
    position: "absolute",
    top: 0,
    left: 0,
  },
  btnWrapper: {
    height: "100%",
    position: "absolute",
    bottom: 28,
  },
  slideBtn: {
    width: 18,
    height: 18,
    background: theme.palette.primary.main,
    border: "2px solid white",
    borderRadius: 360,
  },
  valueText: {
    transform: "translateX(calc(-50% + 10px)) translateY(-25px)",
    color: theme.palette.primary.main,
    opacity: 0.8,
  },
  itemsDiv: {
    position: "relative",
  },
  item: {
    position: "absolute",
    top: 0,
  },
  itemText: {
    fontSize: 14,
    maxWidth: 200,
    margin: "auto",
    [theme.breakpoints.down('xs')]:{
        fontSize:10,
    maxWidth: 100,

    }
  },
  fontText: {
    marginTop: 20,
    fontFamily: theme.fonts.quicksand,
    fontWeight: 600,
    fontSize: 18,
    marginBottom: 20,
    [theme.breakpoints.down('xs')]:{
        fontSize:10,
    }
  },
}));

const Timeline = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* slide */}
      <div className={classes.slide}>
        {/* subslide */}
        <div className={classes.subSlide} />
        {/* text btns */}
        <div
          className={classes.btnWrapper}
          style={{ left: "calc(15% - 10px)" }}
        >
          {/* text */}
          <Typography className={classes.valueText} align="center">
            Q1 2018
          </Typography>
          {/* btn */}
          <div className={classes.slideBtn} />
        </div>
        <div
          className={classes.btnWrapper}
          style={{ left: "calc(38% - 10px)" }}
        >
          {/* text */}
          <Typography className={classes.valueText} align="center">
            Q1 2018
          </Typography>
          {/* btn */}
          <div className={classes.slideBtn} />
        </div>
        <div
          className={classes.btnWrapper}
          style={{ left: "calc(62% - 10px)" }}
        >
          {/* text */}
          <Typography className={classes.valueText} align="center">
            Q1 2018
          </Typography>
          {/* btn */}
          <div className={classes.slideBtn} />
        </div>
        <div
          className={classes.btnWrapper}
          style={{ left: "calc(85% - 10px)" }}
        >
          {/* text */}
          <Typography className={classes.valueText} align="center">
            Q1 2018
          </Typography>
          {/* btn */}
          <div className={classes.slideBtn} />
        </div>
      </div>
      {/* width same as slide */}
      <div className={classes.itemsDiv}>
        {/* item */}
        <div className={classes.item} style={{ left: "calc(15% - 100px)" }}>
          {/* text */}
          <Typography
            color="primary"
            align="center"
            className={classes.fontText}
          >
            Jan - Apr 2018
          </Typography>
          <Typography
            color="secondary"
            align="center"
            className={classes.itemText}
          >
            Creation of a decentralize martketplace to neural network adjacent
            coefficients.
          </Typography>
        </div>
        {/* item */}
        <div className={classes.item} style={{ left: "calc(38% - 100px)" }}>
          {/* text */}
          <Typography
            color="primary"
            align="center"
            className={classes.fontText}
          >
            Jan - Apr 2018
          </Typography>
          <Typography
            color="secondary"
            align="center"
            className={classes.itemText}
          >
            Creation of a decentralize martketplace to neural network adjacent
            coefficients.
          </Typography>
        </div>
        {/* item */}
        <div className={classes.item} style={{ left: "calc(62% - 100px)" }}>
          {/* text */}
          <Typography
            color="primary"
            align="center"
            className={classes.fontText}
          >
            Jan - Apr 2018
          </Typography>
          <Typography
            color="secondary"
            align="center"
            className={classes.itemText}
          >
            Creation of a decentralize martketplace to neural network adjacent
            coefficients.
          </Typography>
        </div>
        {/* item */}
        <div className={classes.item} style={{ left: "calc(85% - 100px)" }}>
          {/* text */}
          <Typography
            color="primary"
            align="center"
            className={classes.fontText}
          >
            Jan - Apr 2018
          </Typography>
          <Typography
            color="secondary"
            align="center"
            className={classes.itemText}
          >
            Creation of a decentralize martketplace to neural network adjacent
            coefficients.
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Timeline;

import React from "react";
import { Hidden, makeStyles, Typography } from "@material-ui/core";
import {
  Timeline as MuiTimeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@material-ui/lab";

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
    width: "15%",
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
    [theme.breakpoints.down("xs")]: {
      maxWidth: 100,
    },
  },
  fontText: {
    marginTop: 20,
    fontFamily: theme.fonts.quicksand,
    fontWeight: 600,
    fontSize: 18,
    marginBottom: 20,
    [theme.breakpoints.down("sm")]: {
      marginTop: 0,
    },
  },
  red: {
    color: theme.palette.primary.main,
  },
  white: {
    color: "white",
  },
}));

const Timeline = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* Mobile */}
      <Hidden mdUp>
        <MuiTimeline align="alternate">
          <TimelineItem>
            <TimelineOppositeContent>
              <Typography className={classes.white}>
                <Typography
                  color="primary"
                  align="center"
                  className={classes.fontText}
                >
                  LISTING ON EXCHANGE
                </Typography>
                <Typography
                  color="secondary"
                  align="center"
                  className={classes.itemText}
                >
                  Listing on most popular AMM Exchange Pancakeswap.
                </Typography>
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography className={classes.red}>Q1 2021</Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent>
              <Typography
                color="primary"
                align="center"
                className={classes.fontText}
              >
                HEAVY MARKETING
              </Typography>
              <Typography
                color="secondary"
                align="center"
                className={classes.itemText}
              >
                More Marketing with to boast the projects reach.
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography className={classes.red}>Q2 2021</Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent>
              <Typography
                color="primary"
                align="center"
                className={classes.fontText}
              >
                DEX DEVELOPMENT
              </Typography>
              <Typography
                color="secondary"
                align="center"
                className={classes.itemText}
              >
                Development of own Decentralized Dex on binance smart chain.
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography className={classes.red}>Q3 2021</Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent>
              <Typography
                color="primary"
                align="center"
                className={classes.fontText}
              >
                DEX LAUNCH
              </Typography>
              <Typography
                color="secondary"
                align="center"
                className={classes.itemText}
              >
                Launch of the Dex on binance smart chain.
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography className={classes.red}>Q4 2021</Typography>
            </TimelineContent>
          </TimelineItem>
        </MuiTimeline>
      </Hidden>
      {/* Desktop */}
      <Hidden smDown>
        <div className={classes.slide}>
          <div className={classes.subSlide} />
          <div
            className={classes.btnWrapper}
            style={{ left: "calc(15% - 10px)" }}
          >
            <Typography className={classes.valueText} align="center">
              Q1 2021
            </Typography>
            <div className={classes.slideBtn} />
          </div>
          <div
            className={classes.btnWrapper}
            style={{ left: "calc(38% - 10px)" }}
          >
            <Typography className={classes.valueText} align="center">
              Q2 2021
            </Typography>
            <div className={classes.slideBtn} />
          </div>
          <div
            className={classes.btnWrapper}
            style={{ left: "calc(62% - 10px)" }}
          >
            <Typography className={classes.valueText} align="center">
              Q3 2021
            </Typography>
            <div className={classes.slideBtn} />
          </div>
          <div
            className={classes.btnWrapper}
            style={{ left: "calc(85% - 10px)" }}
          >
            <Typography className={classes.valueText} align="center">
              Q4 2021
            </Typography>
            <div className={classes.slideBtn} />
          </div>
        </div>
        <div className={classes.itemsDiv}>
          <div className={classes.item} style={{ left: "calc(15% - 100px)" }}>
            <Typography
              color="primary"
              align="center"
              className={classes.fontText}
            >
              LISTING ON EXCHANGE
            </Typography>
            <Typography
              color="secondary"
              align="center"
              className={classes.itemText}
            >
              Listing on most popular AMM Exchange Pancakeswap.
            </Typography>
          </div>
          <div className={classes.item} style={{ left: "calc(38% - 100px)" }}>
            <Typography
              color="primary"
              align="center"
              className={classes.fontText}
            >
              HEAVY MARKETING
            </Typography>
            <Typography
              color="secondary"
              align="center"
              className={classes.itemText}
            >
              More Marketing with to boast the projects reach.
            </Typography>
          </div>
          <div className={classes.item} style={{ left: "calc(62% - 100px)" }}>
            <Typography
              color="primary"
              align="center"
              className={classes.fontText}
            >
              DEX DEVELOPMENT
            </Typography>
            <Typography
              color="secondary"
              align="center"
              className={classes.itemText}
            >
              Development of own Decentralized Dex on binance smart chain.
            </Typography>
          </div>
          <div className={classes.item} style={{ left: "calc(85% - 100px)" }}>
            <Typography
              color="primary"
              align="center"
              className={classes.fontText}
            >
              DEX LAUNCH
            </Typography>
            <Typography
              color="secondary"
              align="center"
              className={classes.itemText}
            >
              Launch of the Dex on binance smart chain.
            </Typography>
          </div>
        </div>
      </Hidden>
    </div>
  );
};

export default Timeline;

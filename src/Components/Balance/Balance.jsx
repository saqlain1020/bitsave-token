import React from "react";
import { Button, makeStyles, TextField, Typography } from "@material-ui/core";
import TimelineSlide from "../TimelineSlide/TimelineSlide";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexFlow: "column",
    marginTop: 30,
  },
  max: {
    color: theme.palette.primary.main,
    cursor: "pointer",
  },
  buyBtn: {
    width: 200,
    height: 45,
    marginLeft: 20,
    marginTop: 18,
  },
}));

const Balance = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div style={{ display: "flex", alignItems: "center" }}>
        {/* input */}
        <div>
          <Typography color="primary" style={{ marginLeft: 10 }}>
            YOUR BALANCE: 0.52 BNB
          </Typography>
          <TextField
            variant="outlined"
            size="small"
            InputProps={{
              endAdornment: (
                <>
                  <Typography color="secondary" style={{ marginRight: 10 }}>
                    BNB
                  </Typography>
                  <Typography className={classes.max}>
                    <b>MAX</b>
                  </Typography>
                </>
              ),
            }}
          />
        </div>
        {/* button */}
        <div>
          <Button className={classes.buyBtn} variant="outlined" color="primary">
            Buy
          </Button>
        </div>
      </div>
      <div style={{marginTop:80,}} />
      <TimelineSlide/>
    </div>
  );
};

export default Balance;

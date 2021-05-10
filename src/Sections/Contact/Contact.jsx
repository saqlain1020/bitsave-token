import React from "react";
import {
  Button,
  Container,
  Grid,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import Image from "src/Assets/images/contact.png";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 300,
    marginBottom:100,
  },
  image: {
    background: `url(${Image})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    height: "100%",
    backgroundPosition: "center",
    minHeight: 300,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexFlow: "column",
  },
  icon: {
    color: theme.palette.secondary.light,
    background: "#293551",
    padding:7,
    fontSize:18,
    marginRight:10,
    borderRadius: 360,
  },
  title: {
    letterSpacing: 2,
    fontSize: 12,
    marginBottom: 5,
  },
  social:{
      display:"flex",
      alignItems:"center",
      marginTop:10,
  }
}));

const Contact = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="lg" className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <div className={classes.image}>
              <div>
            <div className={classes.social}>
              <i className={`fab fa-telegram-plane ${classes.icon}`}></i>
              <Typography color="secondary">Join us on Telegram</Typography>
            </div>
            <div className={classes.social}>
              <i className={`fab fa-twitter ${classes.icon}`}></i>
              <Typography color="secondary">Follow us on Twitter</Typography>
            </div>
            <div className={classes.social}>
              <i className={`fab fa-medium-m ${classes.icon}`}></i>
              <Typography color="secondary">Read more on Medium</Typography>
            </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography color="primary" variant="h5">
                CONTACT US
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography color="primary" className={classes.title}>
                YOUR NAME
              </Typography>
              <TextField size="small" variant="outlined" />
            </Grid>
            <Grid item xs={12}>
              <Typography color="primary" className={classes.title}>
                YOUR MESSAGE
              </Typography>
              <TextField
                fullWidth
                size="small"
                variant="outlined"
                multiline
                rows={5}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography align="right">
                <Button
                  variant="contained"
                  color="primary"
                  style={{ width: 120 }}
                >
                  Send
                </Button>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;

import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "rgb(244,47,84)",
    },
    secondary: {
      main: "rgb(15,25,50)",
      light: "rgb(152,174,208)",
    },
    text: {
      primary: "#ffffff",
      secondary: "rgb(152,174,208)",
    },
  },
  typography: {},
  overrides: {    
    MuiButton: {
      root: {
        borderRadius: 360,
        textTransform: "none",
        padding: "12px 25px",
      },
      label: {
        fontWeight: 300,
      },
      outlinedPrimary:{
        color: "#ffffff",
      }
    },
    MuiOutlinedInput:{
      root:{
        color: "rgb(152,174,208)",
        "& div,fieldset,input":{
          borderColor: "rgba(152,174,208,.3) !important"
        }
      }
    },
    MuiTypography: {
      body1: {
        fontSize: 14,
      },
      colorSecondary: {
        color: "rgb(152,174,208)",
      },
      colorPrimary: {
        color: "white",
      },
    },
    
  },
  customShadows: {
    light: "0px 0px 20px rgba(0,0,0,0.06)",
    medium: "0px 0px 30px rgba(0,0,0,0.1)",
  },
  customColors: {},
  fonts:{
    quicksand: "'Quicksand', sans-serif",
  }
});

export default theme;

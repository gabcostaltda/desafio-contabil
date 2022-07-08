import {createTheme, ThemeProvider, styled} from "@mui/material";

export const appTheme = createTheme({
  palette: {
    primary: {
      main: "#288DBC",
      contrastText: "#fff"
    },
    secondary: {
      main: "#2FB3CF",
      contrastText: "#fff"
    }
  }
});
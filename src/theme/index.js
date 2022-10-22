import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 480,
      ss: 768,
      md: 960,
      lg: 1024,
      xl: 1440,
      xxl: 1600
    },
  },
});

export default theme
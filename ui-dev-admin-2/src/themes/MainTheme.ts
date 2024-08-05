import { createTheme } from '@material-ui/core';

const primaryMainColor = '#f44236';
const primaryLightColor = '#ff4181';
const primaryDarkColor = '#f24c50';
const secondaryMainColor = '#3f51b5';
const dividerColor = '#ededed';
const textPrimaryColor = '#555';
const textSecondaryColor = 'rgba(0,0,0,.87)';
const textColor1 = '#111';
const textColor2 = '#333';
const textColor3 = '#fff';
const backgroundPaperColor = '#fdfdfd';
const hoverColor = '#f5f5f5';
const confirmButtonColor = '#7cd1f8';
const cancelButtonColor = '#efefef';

export const theme = createTheme({
  palette: {
    divider: dividerColor,
    text: {
      primary: textPrimaryColor,
      secondary: textSecondaryColor,
    },
    primary: {
      main: primaryMainColor,
      light: primaryLightColor,
      dark: primaryDarkColor,
    },
    secondary: {
      main: secondaryMainColor,
    },
    background: {
      paper: backgroundPaperColor,
    },
    action: {
      hover: hoverColor,
    },
  },
  spacing: 5,
  typography: {
    h1: {
      fontSize: 20,
      color: textSecondaryColor,
      fontWeight: 400,
    },
    h2: {
      fontSize: 18,
      color: textColor1,
      fontWeight: 400,
      lineHeight: 1.1,
    },
    h3: {
      fontSize: 18,
      fontWeight: 600,
      color: textPrimaryColor,
    },
    h4: {
      fontSize: 14,
      color: textPrimaryColor,
      fontWeight: 'bold',
    },
    body1: {
      fontSize: 14,
      color: textPrimaryColor,
    },
    body2: {
      fontSize: 14,
      color: textColor3,
    },
    button: {
      fontWeight: 400,
      textTransform: 'capitalize',
    },
  },
});

export { confirmButtonColor, cancelButtonColor };

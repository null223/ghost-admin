import { createGlobalStyle } from 'styled-components';

import { amber, blue } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

// https://material-ui.com/ja/customization/palette/
// and get from styled-components theme
const theme = createTheme({
  palette: {
    background: {
      default: blue[50],
    },
    primary: amber,
  },
});

export const GlobalStyle = createGlobalStyle`
  body {
    // background-color: ${blue[50]}
  }
`;

export default theme;
console.log(theme);

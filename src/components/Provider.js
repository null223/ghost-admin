import { ThemeProvider as StThemeProvider } from 'styled-components';
import { SWRConfig } from 'swr';

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
import { StylesProvider } from '@mui/styles';

import swrOptions from '@/middleware/swr';
import theme, { GlobalStyle } from '@/middleware/theme';

export default function Provider({ children }) {
  return (
    <SWRConfig value={swrOptions}>
      <StylesProvider injectFirst>
        <MUIThemeProvider theme={theme}>
          <StThemeProvider theme={theme}>
            <CssBaseline />
            <GlobalStyle />
            {children}
          </StThemeProvider>
        </MUIThemeProvider>
      </StylesProvider>
    </SWRConfig>
  );
}

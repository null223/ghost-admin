import { ThemeProvider as StThemeProvider } from 'styled-components';
import { SWRConfig } from 'swr';

import CssBaseline from '@mui/material/CssBaseline';
import { StyledEngineProvider, ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
import { StylesProvider } from '@mui/styles';
import swrOptions from '@/middleware/swr';
import theme, { GlobalStyle } from '@/middleware/theme';

export default function Provider({ children }) {
  return (
    <SWRConfig value={swrOptions}>
      <StyledEngineProvider injectFirst>
        <MUIThemeProvider theme={theme}>
          <StThemeProvider theme={theme}>
          <StylesProvider injectFirst>
            <CssBaseline />
            <GlobalStyle />
            {children}
            </StylesProvider>
          </StThemeProvider>
        </MUIThemeProvider>
      </StyledEngineProvider>
    </SWRConfig>
  );
}

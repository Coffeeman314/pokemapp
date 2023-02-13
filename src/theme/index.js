import React from 'react';
import {
  createTheme,
  CssBaseline,
  StyledEngineProvider,
  ThemeProvider,
} from '@mui/material';
import palette from './palette';
import typography from './typography';
import components from './overrides/index';

const MUITheme = ({ children }) => {
  const customTheme = createTheme({ palette, typography, components });
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={customTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default MUITheme;

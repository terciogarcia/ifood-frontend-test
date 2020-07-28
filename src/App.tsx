import React from 'react';
import Layout from 'components/Layout';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from 'theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout />
    </ThemeProvider>
  );
}

export default App;

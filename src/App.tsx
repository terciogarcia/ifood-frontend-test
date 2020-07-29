import React from 'react';
import Layout from 'components/Layout';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from 'theme';
import FilterBar from 'components/FilterBar';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <FilterBar />
      </Layout>
    </ThemeProvider>
  );
}

export default App;

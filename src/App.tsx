import React, { useEffect, useState } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from 'theme';
import Login from 'pages/Login';
import Home from 'pages/Home';
import { getHashParams } from 'helpers/hash';
import { setAccessToken, getAccessToken } from 'services/storage';

function App() {
  const [ authenticated, setAuthenticated ] = useState<boolean>();

  useEffect(() => {
    const storedToken = getAccessToken();
    if (storedToken) {
      setAuthenticated(true);
      return;
    }

    const { access_token: accessToken } = getHashParams();

    if (accessToken) { setAccessToken(accessToken); }

    setAuthenticated(!!accessToken);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      {authenticated === true && <Home />}
    </ThemeProvider>
  );
}

export default App;

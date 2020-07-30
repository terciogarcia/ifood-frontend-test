import React, { useEffect } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from 'theme';
import Home from 'pages/Home';
import { getHashParams } from 'helpers/hash';
import { ApplicationState } from 'store/ducks';
import { useSelector, useDispatch } from 'react-redux';
import Login from 'pages/Login';
import { login } from 'store/ducks/auth';

function App() {
  const authenticated = useSelector<ApplicationState, boolean>((state) => state.auth.authenticated);
  const dispatch = useDispatch();

  useEffect(() => {
    const { access_token: accessToken } = getHashParams();

    if (accessToken) {
      dispatch(login(accessToken));
    }
  }, [ dispatch ]);

  return (
    <ThemeProvider theme={theme}>
      {authenticated ? <Home /> : <Login />}
    </ThemeProvider>
  );
}

export default App;

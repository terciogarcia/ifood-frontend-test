import React from 'react';
import { Button } from '@material-ui/core';
import { SPOTIFY_REDIRECT_URL, SPOTIFY_CLIENT_ID } from 'constants/environment';
import Logo from 'assets/svg/Logo';
import useStyles from './styles';

const authEndpoint = `https://accounts.spotify.com/authorize?client_id=${SPOTIFY_CLIENT_ID}&response_type=token&redirect_uri=${SPOTIFY_REDIRECT_URL}`;

function Login() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <Logo className={classes.logo} />
        <Button
          href={authEndpoint}
          color="primary"
          variant="contained"
        >
          Acessar
        </Button>
      </div>
    </div>
  );
}

export default Login;

import React from 'react';
import { Button } from '@material-ui/core';
import { SPOTIFY_REDIRECT_URL, SPOTIFY_CLIENT_ID } from 'constants/environment';

const authEndpoint = `https://accounts.spotify.com/authorize?client_id=${SPOTIFY_CLIENT_ID}&response_type=token&redirect_uri=${SPOTIFY_REDIRECT_URL}`;

function Login() {
  return (
    <div>
      <Button
        href={authEndpoint}
        color="primary"
        variant="contained"
      >
        Acessar
      </Button>
    </div>
  );
}

export default Login;

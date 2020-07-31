import React, { memo } from 'react';
import { Grid } from '@material-ui/core';
import { Playlist } from 'interfaces/playlist';
import useStyles from './styles';

interface PlaylistCardProps {
  playlist: Playlist;
}

function PlaylistCard({ playlist }: PlaylistCardProps) {
  const classes = useStyles();

  return (
    <Grid item md={3} lg={2} sm={4} xs={6} className={classes.container}>
      <a
        className={classes.imageLink}
        target="_blank"
        rel="noopener noreferrer"
        href={playlist.external_urls.spotify}
      >
        <img className={classes.image} alt={playlist.name} src={playlist.images[0].url} />
      </a>
    </Grid>
  );
}

export default memo(PlaylistCard);

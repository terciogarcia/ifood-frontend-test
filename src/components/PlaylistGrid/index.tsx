import React, { memo } from 'react';
import { Grid } from '@material-ui/core';
import PlaylistCard from 'components/PlaylistCard';
import { Playlist } from 'interfaces/playlist';
import useStyles from './styles';

interface PlaylistGridProps {
  playlists: Playlist[]
}
function PlaylistGrid({ playlists }: PlaylistGridProps) {
  const classes = useStyles();

  return (
    <section className={classes.container}>
      <Grid container>
        {
          playlists.map((playlist) => (
            <PlaylistCard key={playlist.id} playlist={playlist} />
          ))
        }
      </Grid>
    </section>
  );
}

export default memo(PlaylistGrid);

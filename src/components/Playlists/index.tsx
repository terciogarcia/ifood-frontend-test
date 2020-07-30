import React, { memo } from 'react';
import { GridList } from '@material-ui/core';
import PlaylistCard from 'components/PlaylistCard';
import useStyles from './styles';

function Playlists() {
  const classes = useStyles();

  return (
    <section className={classes.container}>
      <GridList cellHeight={180} cols={4}>
        <PlaylistCard />
        <PlaylistCard />
      </GridList>
    </section>
  );
}

export default memo(Playlists);

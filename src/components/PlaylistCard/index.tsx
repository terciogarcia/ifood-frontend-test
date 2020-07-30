import React, { memo } from 'react';
import { GridListTile } from '@material-ui/core';
import useStyles from './styles';

function PlaylistCard() {
  const classes = useStyles();

  return (
    <GridListTile className={classes.container} />
  );
}

export default memo(PlaylistCard);

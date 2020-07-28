import React from 'react';
import { CssBaseline, AppBar } from '@material-ui/core';
import SearchInput from 'components/SearchInput';
import useStyles from './styles';

function Layout() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        className={classes.appBar}
        elevation={0}
        position="absolute"
      >
        <SearchInput />
      </AppBar>
    </div>
  );
}

export default Layout;

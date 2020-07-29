import React, { memo } from 'react';
import { CssBaseline } from '@material-ui/core';
import useStyles from './styles';

export interface LayoutProps {
  children?: React.ReactNode
}

function Layout({ children }: LayoutProps) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      {children}
    </div>
  );
}

export default memo(Layout);

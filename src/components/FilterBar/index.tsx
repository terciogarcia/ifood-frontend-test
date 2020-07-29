import React, { memo } from 'react';
import SearchInput from 'components/SearchField';
import { AppBar, Button } from '@material-ui/core';
import { FilterList as FilterIcon } from '@material-ui/icons';

import useStyles from './styles';

function FilterBar() {
  const classes = useStyles();

  return (
    <AppBar
      className={classes.appBar}
      elevation={0}
      position="absolute"
    >
      <SearchInput />
      <Button className={classes.filterButton} color="primary" startIcon={<FilterIcon />}>
        Filtros
      </Button>
    </AppBar>
  );
}

export default memo(FilterBar);

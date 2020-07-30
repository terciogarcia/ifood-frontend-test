import React, { memo } from 'react';
import SearchInput from 'components/SearchField';
import { AppBar, Button } from '@material-ui/core';
import { FilterList as FilterIcon } from '@material-ui/icons';

import { logout } from 'store/ducks/auth';
import { useDispatch } from 'react-redux';
import useStyles from './styles';

function FilterBar() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

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

      <Button onClick={handleLogout} color="primary" variant="contained">
        Sair
      </Button>
    </AppBar>
  );
}

export default memo(FilterBar);

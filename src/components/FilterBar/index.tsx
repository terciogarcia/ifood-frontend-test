import React, { memo, useState, useCallback } from 'react';
import SearchInput from 'components/SearchField';
import { AppBar, Button } from '@material-ui/core';
import { FilterList as FilterIcon, Close as CloseIcon } from '@material-ui/icons';
import { logout } from 'store/ducks/auth';
import { useDispatch } from 'react-redux';
import { Filter } from 'interfaces/filter';
import FilterField from 'components/FilterField';
import clsx from 'clsx';
import useStyles from './styles';

export interface FilterBarProps {
  filters?: Filter[]
}

function FilterBar({ filters }: FilterBarProps) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [ displayFilters, setDisplayFilters ] = useState(false);

  const handleLogout = useCallback(() => {
    dispatch(logout());
  }, [ dispatch ]);

  const handleToggleFilters = useCallback(() => {
    setDisplayFilters(!displayFilters);
  }, [ displayFilters ]);

  return (
    <AppBar
      className={classes.appBar}
      elevation={0}
      position="absolute"
    >
      <SearchInput />
      <div className={classes.buttonContainer}>
        <Button
          onClick={handleToggleFilters}
          className={classes.filterButton}
          color="primary"
          startIcon={
            displayFilters ? <CloseIcon /> : <FilterIcon />
          }
        >
          Filtros
        </Button>
        <Button className={classes.logoutButton} onClick={handleLogout} size="small" variant="text">
          Sair
        </Button>
      </div>
      <div className={clsx(
        classes.filterContainer,
        displayFilters && classes.filterContainerVisible,
      )}
      >
        {
          filters && filters.map((filter) => (
            <FilterField key={filter.id} config={filter} />
          ))
        }
      </div>
    </AppBar>
  );
}

export default memo(FilterBar);

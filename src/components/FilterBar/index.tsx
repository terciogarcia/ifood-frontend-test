import React, {
  memo, useState, useCallback, useEffect,
} from 'react';
import SearchInput from 'components/SearchField';
import { AppBar, Button, TextFieldProps } from '@material-ui/core';
import { FilterList as FilterIcon, Close as CloseIcon } from '@material-ui/icons';
import { logout } from 'store/ducks/auth';
import { useDispatch } from 'react-redux';
import { Filter } from 'interfaces/filter';
import FilterField from 'components/FilterField';
import clsx from 'clsx';
import Logo from 'assets/svg/Logo';
import { FilterParams } from 'interfaces/filterParams';
import useStyles from './styles';

export interface FilterBarProps {
  filters?: Filter[],
  onSearchTermChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
  searchTerm: string,
  onSubmit: (params: FilterParams) => void
}

function FilterBar({
  filters, onSearchTermChange, searchTerm, onSubmit,
}: FilterBarProps) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [ displayFilters, setDisplayFilters ] = useState(false);
  const [ filterParams, setFilterParams ] = useState<FilterParams>({});

  const handleLogout = useCallback(() => {
    dispatch(logout());
  }, [ dispatch ]);

  useEffect(() => {
    onSubmit(filterParams);
  }, [ filterParams, onSubmit ]);

  const handleToggleFilters = useCallback(() => {
    setDisplayFilters(!displayFilters);
  }, [ displayFilters ]);

  const handleChangeFilterParams = useCallback((
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>,
  ) => {
    const { name, value } = e.target;

    setFilterParams((previous: FilterParams) => ({
      ...previous,
      [name]: value || null,
    }));
  }, []);

  return (
    <AppBar
      className={classes.appBar}
      elevation={0}
      position="sticky"
    >
      <Logo className={classes.logo} />
      <SearchInput onChange={onSearchTermChange} name="term" value={searchTerm} />
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
          filters?.map((filter) => (
            <FilterField
              onChange={handleChangeFilterParams as TextFieldProps['onChange']}
              key={filter.id}
              config={filter}
            />
          ))
        }
      </div>
    </AppBar>
  );
}

export default memo(FilterBar);

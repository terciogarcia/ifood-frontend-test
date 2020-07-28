import React from 'react';
import { InputAdornment, Input, InputProps } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import useStyles from './styles';

function SearchInput(props: InputProps) {
  const classes = useStyles();
  return (
    <Input
      type="text"
      className={classes.input}
      placeholder="Search"
      disableUnderline
      startAdornment={(
        <InputAdornment position="start">
          <SearchIcon className={classes.icon} />
        </InputAdornment>
      )}
      {...props}
    />
  );
}

export default SearchInput;

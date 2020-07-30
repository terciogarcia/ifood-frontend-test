import React, { memo } from 'react';
import { Filter, FilterEntityTypes, FilterPrimitiveTypes } from 'interfaces/filter';
import {
  Select, FormControl, InputLabel, MenuItem, TextField,
} from '@material-ui/core';
import useStyles from './styles';

export interface FilterFieldProps {
  config: Filter
}

function FilterField({ config }: FilterFieldProps) {
  const { name, id } = config;

  const classes = useStyles();

  if (config.values) {
    return (
      <FormControl className={classes.formControl} variant="outlined" size="small">
        <InputLabel id={`${id}-filter-label`}>{name}</InputLabel>
        <Select
          labelId={`${id}-filter-label`}
          id={`${id}-filter-input`}
          onChange={() => null}
          label={name}
        >
          <MenuItem value="">
            <em>Selecione</em>
          </MenuItem>
          {
          config.values.map((value) => (
            <MenuItem key={value.value} value={value.value}>{value.name}</MenuItem>
          ))
        }
        </Select>
      </FormControl>
    );
  }

  if (config.validation?.primitiveType === FilterPrimitiveTypes.INTEGER) {
    return (
      <TextField
        id={`${id}-filter`}
        size="small"
        variant="outlined"
        className={classes.formControl}
        label={name}
        type="number"
      />
    );
  }

  if (config.validation?.entityType === FilterEntityTypes.DATE_TIME) {
    return (
      <TextField
        id={`${id}-filter`}
        size="small"
        type="datetime-local"
        variant="outlined"
        placeholder=""
        className={classes.formControl}
        label={name}
        InputLabelProps={{
          shrink: true,
        }}
      />
    );
  }

  return null;
}

export default memo(FilterField);

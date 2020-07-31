import React, { memo } from 'react';
import { Filter, FilterEntityTypes, FilterPrimitiveTypes } from 'interfaces/filter';
import {
  Select, FormControl, InputLabel, MenuItem, TextField, SelectProps, TextFieldProps,
} from '@material-ui/core';
import useStyles from './styles';

export interface FilterFieldProps {
  config: Filter,
  onChange: TextFieldProps['onChange'],
}

function FilterField({ config, onChange }: FilterFieldProps) {
  const { name, id } = config;

  const classes = useStyles();

  if (config.values) {
    return (
      <FormControl className={classes.formControl} variant="outlined" size="small">
        <InputLabel id={`${id}-filter-label`}>{name}</InputLabel>
        <Select
          name={id}
          labelId={`${id}-filter-label`}
          id={`${id}-filter`}
          defaultValue=""
          onChange={onChange as SelectProps['onChange']}
          label={name}
        >
          <MenuItem value="">
            <em>Selecione</em>
          </MenuItem>
          {
          config.values.map((item) => (
            <MenuItem key={item.value} value={item.value}>{item.name}</MenuItem>
          ))
        }
        </Select>
      </FormControl>
    );
  }

  if (config.validation?.primitiveType === FilterPrimitiveTypes.INTEGER) {
    return (
      <TextField
        name={id}
        id={`${id}-filter`}
        size="small"
        onChange={onChange}
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
        name={id}
        id={`${id}-filter`}
        size="small"
        type="datetime-local"
        variant="outlined"
        onChange={onChange}
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

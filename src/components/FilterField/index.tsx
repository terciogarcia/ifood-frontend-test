import React, { memo, useState, useCallback } from 'react';
import { Filter, FilterEntityTypes, FilterPrimitiveTypes } from 'interfaces/filter';
import {
  Select, FormControl, InputLabel, MenuItem, TextField,
} from '@material-ui/core';
import { getFilterError } from 'helpers/validation';
import useStyles from './styles';

export interface FilterFieldProps {
  config: Filter,
  onChange: (name: string, value: string) => void,
}

function FilterField({ config, onChange }: FilterFieldProps) {
  const [ error, setError ] = useState<string | null>(null);
  const classes = useStyles();

  const handleInputChange = useCallback((
    e: React.ChangeEvent<{ name?: string | undefined; value: unknown; }>,
  ) => {
    const { name: attributeName, value } = e.target;
    setError(getFilterError(value as string, config.validation));
    onChange(attributeName as string, value as string);
  }, [ config ]);

  const handleDateChange = useCallback((
    e: React.ChangeEvent<{ name?: string | undefined; value: unknown; }>,
  ) => {
    const { name: attributeName, value } = e.target;
    onChange(attributeName as string, `${value}:00`);
  }, []);

  const {
    name, id, validation, values,
  } = config;

  const fieldProps = {
    name: id,
    error: !!error,
    id: `${id}-filter`,
    label: name,
    helperText: error,
  };

  if (values) {
    return (
      <FormControl className={classes.formControl} variant="outlined" size="small">
        <InputLabel id={`${id}-filter-label`}>{name}</InputLabel>
        <Select
          labelId={`${id}-filter-label`}
          defaultValue=""
          onChange={handleInputChange}
          {...fieldProps}
        >
          <MenuItem value="">
            <em>Selecione</em>
          </MenuItem>
          {
          values.map((item) => (
            <MenuItem key={item.value} value={item.value}>{item.name}</MenuItem>
          ))
        }
        </Select>
      </FormControl>
    );
  }

  if (validation?.primitiveType === FilterPrimitiveTypes.INTEGER) {
    return (
      <TextField
        size="small"
        onChange={handleInputChange}
        variant="outlined"
        className={classes.formControl}
        type="number"
        {...fieldProps}
      />
    );
  }

  if (validation?.entityType === FilterEntityTypes.DATE_TIME) {
    return (
      <TextField
        size="small"
        onChange={handleDateChange}
        variant="outlined"
        type="datetime-local"
        className={classes.formControl}
        InputLabelProps={{
          shrink: true,
        }}
        {...fieldProps}
      />
    );
  }

  return null;
}

export default memo(FilterField);

import { FC } from 'react';
import { FormControl, InputLabel, MenuItem, Select as MuiSelect } from '@mui/material';

import { ISelectProps } from './resources/select.model';

const Select: FC<ISelectProps> = ({ label, options, handleSelect, ...rest }) => {
  return (
    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
      {
        label
          ? <InputLabel id="select-label">{label}</InputLabel>
          : null
      }
      <MuiSelect
        labelId="select-label"
        id="select"
        label={label}
        {...rest}
      >
        {
          options.map(({ value, label }) => (
            <MenuItem
              key={value}
              onClick={() => handleSelect && handleSelect({ value, label })}
              value={value}>
              {label ?? value}
            </MenuItem>
          ))
        }
      </MuiSelect>
    </FormControl>
  )
}

export default Select;
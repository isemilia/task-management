import { FC } from 'react';
import { Controller } from 'react-hook-form';

import Select from '@/ui/select';

import { ICSelectProps } from './resources/controlled-select.model';

const CSelect: FC<ICSelectProps> = ({ name, options, ...rest }) => {
  return (
    <Controller
      name={name}
      render={({ field: { onChange, onBlur, value } }) => {
        return (
          <Select
            {...rest}
            options={options}
            onChange={onChange}
            onBlur={onBlur}
            value={value}
          />
        )
      }}
    />
  )
}

export default CSelect
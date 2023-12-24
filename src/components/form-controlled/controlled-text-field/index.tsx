import { FC } from 'react';
import { Controller } from 'react-hook-form';
import { TextField } from '@mui/material';
import { ICTextFieldProps } from '@/components/form-controlled/controlled-text-field/model/controlled-text-field.type';

const CTextField: FC<ICTextFieldProps> = ({ name, ...rest }) => {
  return (
    <>
      <Controller
        name={name}
        render={({ field: { onChange, onBlur, value } }) => {
          return (
            <TextField
              {...rest}
              onChange={onChange} // send value to hook form
              onBlur={onBlur} // notify when input is touched/blur
              value={value}
            />
          )
        }}
      />
    </>
  )
}

export default CTextField;
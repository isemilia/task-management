import { FC, useEffect, useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { Box, TextField, Typography } from '@mui/material';
import { ICTextFieldProps } from '@/components/form-controlled/controlled-text-field/model/controlled-text-field.type';

const CTextField: FC<ICTextFieldProps> = ({ name, ...rest }) => {
  const methods = useFormContext();

  const [isError, setError] = useState(false);

  useEffect(() => {
    if (methods.formState.errors[name]) {
      setError(true);
    } else {
      setError(false)
    }
  }, [methods.formState.errors[name], name])

  return (
    <>
      <Controller
        name={name}
        render={({ field: { onChange, onBlur, value, ...controller } }) => {
          return (
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: ({ spacing }) => spacing() }}>
              <TextField
                {...rest}
                {...controller}
                error={isError}
                onChange={onChange}
                onBlur={onBlur}
                value={value}
              />
              {
                isError &&
                <Typography variant={'caption'} sx={{ color: ({ palette }) => palette.error.main }}>
                  <>
                    {methods.formState.errors[name]?.message}
                  </>
                </Typography>
              }
            </Box>
          )
        }}
      />
    </>
  )
}

export default CTextField;
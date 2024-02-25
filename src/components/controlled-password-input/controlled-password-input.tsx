import {FC, useEffect, useState} from 'react';
import {Controller, useFormContext} from 'react-hook-form';
import {Box, IconButton, InputAdornment, TextField, Typography} from '@mui/material';
import {ICPasswordInputProps} from '@/components/controlled-password-input/resources/controlled-password-input.model.ts';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const CPasswordInput: FC<ICPasswordInputProps> = ({ name, ...rest }) => {
  const methods = useFormContext();

  const [isError, setError] = useState(false);
  const [isHidden, setHidden] = useState(true)

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
                type={isHidden ? 'password' : 'text'}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position={'end'}>
                      <IconButton onClick={() => setHidden(state => !state)}>
                        {isHidden ? <VisibilityIcon/> : <VisibilityOffIcon/>}
                      </IconButton>
                    </InputAdornment>
                  )
                }}
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

export default CPasswordInput
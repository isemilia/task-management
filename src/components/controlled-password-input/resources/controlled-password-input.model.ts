import {BaseTextFieldProps} from '@mui/material/TextField/TextField';

export interface ICPasswordInputProps extends Omit<BaseTextFieldProps, 'type'>{
  name: string
}
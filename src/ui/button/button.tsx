import {FC} from 'react';
import {IButtonProps} from '@/ui/button/resources/button.model.ts';
import {CircularProgress, Button as MuiButton} from '@mui/material';

const Button: FC<IButtonProps> = ({children, isLoading, ...rest}) => {
  return (
    <MuiButton
      startIcon={
        isLoading &&
          <CircularProgress
            sx={{
              color: 'common.white',
              '&.MuiCircularProgress-root': {
                width: '25px !important',
                height: '25px !important'
              }
            }}/>
      }
      {...rest}
    >
      {children}
    </MuiButton>
  )
}

export default Button
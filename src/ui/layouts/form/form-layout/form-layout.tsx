import { Box, SxProps, Theme } from '@mui/material';
import { FC, ReactNode } from 'react';

const FormLayout: FC<{ children: ReactNode, sx?: SxProps<Theme> }> = ({ children, sx }) => {
  return (
    <Box sx={{ display: 'grid', gap: ({ spacing }) => spacing(5), ...sx }}>
      {children}
    </Box>
  )
}

export default FormLayout;
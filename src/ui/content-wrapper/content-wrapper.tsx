import { Paper } from '@mui/material';
import { FC, ReactNode } from 'react';

const ContentWrapper: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Paper sx={{ boxSizing: 'border-box', width: '100%', padding: ({ spacing }) => spacing(6) }}>
      {children}
    </Paper>
  )
}

export default ContentWrapper
import { FC, ReactNode } from 'react';

import { Typography } from '@mui/material';

const ActionTitle: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Typography sx={{ marginBottom: ({ spacing }) => spacing(3) }} variant={'h3'} component={'h3'}>
      {children}
    </Typography>
  )
}

export default ActionTitle;
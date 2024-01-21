import { FC, useContext } from 'react';
import { Button } from '@mui/material';

import { AuthContext } from '@/shared/contexts/auth-context';

const Account: FC = () => {
  const { invalidateSession } = useContext(AuthContext);

  const handleLogout = () => {
    invalidateSession();
  }

  return (
    <>
      <Button onClick={() => handleLogout()} variant={'contained'}>Log out</Button>
    </>
  )
}

export default Account;
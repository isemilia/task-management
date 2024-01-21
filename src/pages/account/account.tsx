import { FC, useContext } from 'react';
import { useCookies } from 'react-cookie';
import { Button } from '@mui/material';

import { AuthContext } from '@/shared/contexts/auth-context';

const Account: FC = () => {
  const { invalidateSession } = useContext(AuthContext);

  const [cookies, setCookie, removeCookie] = useCookies(['token']);

  const handleLogout = () => {
    invalidateSession();
    removeCookie('token');
  }

  return (
    <>
      <Button onClick={() => handleLogout()} variant={'contained'}>Log out</Button>
    </>
  )
}

export default Account;
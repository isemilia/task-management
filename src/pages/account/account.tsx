import { AuthContext } from '@/shared/contexts/auth-context';
import { Button } from '@mui/material';
import { FC, useContext } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

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
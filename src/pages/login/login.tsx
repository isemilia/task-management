import { FC, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Paper } from '@mui/material';
import { useCookies } from 'react-cookie';

import LoginForm from '@/components/login-form';
import ActionTitle from '@/ui/action-title';
import { useLoginMutation } from '@/shared/api';
import { AuthContext } from '@/shared/contexts/auth-context';

const Login: FC = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['token']);
  const { isAuth } = useContext(AuthContext);

  const [postLogin, loginReq] = useLoginMutation();

  const navigate = useNavigate();

  useEffect(() => {
    if (loginReq.isSuccess) {
      const { result } = loginReq.data;

      setCookie('token', result.token, { maxAge: 60 * 60 * 24 });

      if (isAuth) {
        navigate('/');
      }
    }
    if (loginReq.isError) {
      removeCookie('token');
      console.error(loginReq.error);
    }
  }, [loginReq.isLoading, loginReq.isSuccess, loginReq.isError, isAuth]);

  const handleSubmit = async (data: any) => {
    await postLogin({
      body: {
        username: data.username.trim().toLocaleLowerCase(),
        password: data.password.trim(),
      }
    });
  }

  return (
    <Box sx={{ minHeight: '100vh', display: 'grid', placeContent: 'center' }}>
      <Paper sx={{ padding: ({ spacing }) => spacing(5) }}>
        <ActionTitle>Log in</ActionTitle>
        <LoginForm handleSubmit={handleSubmit} />
      </Paper>
    </Box>
  )
}

export default Login
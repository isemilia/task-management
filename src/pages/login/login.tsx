import { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Paper } from '@mui/material';

import LoginForm from '@/components/login-form';
import ActionTitle from '@/ui/action-title';
import { useLoginMutation } from '@/shared/api/queries/auth/auth-queries';
import { useAppDispatch, useAppSelector } from '@/shared/model/hooks/redux';
import { setToken, setUser } from '@/shared/redux/auth-slice';

const Login: FC = () => {
  const user = useAppSelector(state => state.auth.user);

  const [postLogin, loginReq] = useLoginMutation();

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (loginReq.isSuccess) {
      const { data } = loginReq.data;

      console.log(data.user)
      dispatch(setUser(data.user));
      dispatch(setToken(data.token));
      navigate('/');
    }
  }, [loginReq.isLoading, loginReq.isSuccess, loginReq.isError]);

  const handleSubmit = (data: any) => {
    postLogin({
      body: {
        username: data.username.trim(),
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
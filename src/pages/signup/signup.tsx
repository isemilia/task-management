import { FC, useContext, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { Link, useNavigate } from 'react-router-dom';
import { Box, Paper, Link as MuiLink, Typography } from '@mui/material';

import SignupForm from '@/components/signup-form';
import ActionTitle from '@/ui/action-title';
import { useSignupMutation } from '@/shared/api';
import { AuthContext } from '@/shared/contexts/auth-context';

const Signup: FC = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['token']);
  const { isAuth } = useContext(AuthContext);
  const [postSignup, signupReq] = useSignupMutation();

  const navigate = useNavigate();

  useEffect(() => {
    if (signupReq.isSuccess) {
      const { result } = signupReq.data;

      setCookie('token', result.token, { maxAge: 60 * 60 * 24 });

      if (isAuth) {
        navigate('/');
      }
    }
    if (signupReq.isError) {
      removeCookie('token');
      console.error(signupReq.error);
    }
  }, [signupReq.isLoading, signupReq.isSuccess, signupReq.isError, isAuth]);

  const handleSubmit = async (data: any) => {
    await postSignup({
      body: {
        name: data.name.trim(),
        username: data.username.trim().toLocaleLowerCase(),
        password: data.password.trim(),
      }
    });
  }

  return (
    <Box sx={{ minHeight: '100vh', display: 'grid', placeContent: 'center' }}>
      <Paper sx={{ padding: ({ spacing }) => spacing(5) }}>
        <ActionTitle>Create an account</ActionTitle>
        <SignupForm handleSubmit={handleSubmit} />
        <Typography sx={{ marginTop: ({ spacing }) => spacing(4) }}>
          Already have an account? <Link to={'/login'}> <MuiLink component={'span'}>Log in</MuiLink></Link>
        </Typography>
      </Paper>
    </Box>
  );
}

export default Signup;
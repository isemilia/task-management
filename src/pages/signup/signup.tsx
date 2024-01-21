import { FC, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import { Box, Paper } from '@mui/material';

import SignupForm from '@/components/signup-form';
import ActionTitle from '@/ui/action-title';
import { useSignupMutation } from '@/shared/api';

const Signup: FC = () => {
  const [_, setCookie] = useCookies(['token']);
  const [postSignup, signupReq] = useSignupMutation();

  const navigate = useNavigate();

  useEffect(() => {
    if (signupReq.isSuccess) {
      const { result } = signupReq.data;

      setCookie('token', result.token, { maxAge: 60 * 60 * 24 });

      navigate('/');
    }
    if (signupReq.isError) {
      console.error(signupReq.error);
    }
  }, [signupReq.isLoading, signupReq.isSuccess, signupReq.isError]);

  const handleSubmit = async (data: any) => {
    setCookie('token', '');

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
      </Paper>
    </Box>
  );
}

export default Signup;
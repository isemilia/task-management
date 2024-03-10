import { FC } from 'react';
import { Box } from '@mui/material';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import CTextField from '@/components/controlled-text-field';
import { FormLayout } from '@/ui/layouts/form';
import schema from './resources/login-form.schema';
import CPasswordInput from '@/components/controlled-password-input';
import {InferType} from 'yup';
import Button from '@/ui/button';

const LoginForm: FC<{ handleSubmit: (data: any) => void; isSubmitting: boolean }> = ({ handleSubmit, isSubmitting }) => {
  const methods = useForm({
    defaultValues: {
      username: '',
      password: ''
    },
    resolver: yupResolver(schema)
  });

  const onSubmit = (data: InferType<typeof schema>) => {
    handleSubmit(data);
  }

  return (
    <Box>
      <FormProvider {...methods}>
        <form>
          <FormLayout sx={{ minWidth: '400px' }}>
            <CTextField
              name="username"
              required
              label={'Username'} />
            <CPasswordInput
              name="password"
              required
              label={'Password'} />
            <Button
              isLoading={isSubmitting}
              onClick={methods.handleSubmit(onSubmit)}
              variant={'contained'}
              type={'submit'}>Log in</Button>
          </FormLayout>
        </form>
      </FormProvider>
    </Box>
  );
}

export default LoginForm;
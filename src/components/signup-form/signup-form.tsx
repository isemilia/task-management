import { FC } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Box } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';

import { FormLayout } from '@/ui/layouts/form';
import CTextField from '@/components/controlled-text-field';
import { ISignupFormProps } from './resources/signup-form.model';
import schema from './resources/signup-form.schema';
import CPasswordInput from '@/components/controlled-password-input';
import Button from '@/ui/button';

const SignupForm: FC<ISignupFormProps> = ({ handleSubmit, isSubmitting }) => {
  const methods = useForm({
    defaultValues: {
      name: '',
      username: '',
      password: '',
      repeatPassword: ''
    },
    resolver: yupResolver(schema)
  });

  const onSubmit = (data: any) => {
    handleSubmit(data);
  }

  return (
    <Box>
      <FormProvider {...methods}>
        <form>
          <FormLayout sx={{ minWidth: '400px' }}>
            <CTextField
              name={'name'}
              required
              label={'Name'}
              autoComplete={'off'} />
            <CTextField
              name={'username'}
              required
              label={'Username'}
              autoComplete={'off'} />
            <CPasswordInput
              name={'password'}
              required
              label={'Password'}
              autoComplete={'off'} />
            <CPasswordInput
              name={'repeatPassword'}
              required
              label={'Repeat password'}
              autoComplete={'off'} />
            <Button
              isLoading={isSubmitting}
              onClick={methods.handleSubmit(onSubmit)}
              variant={'contained'}
              type={'submit'}>Sign up</Button>
          </FormLayout>
        </form>
      </FormProvider>
    </Box>
  );
}

export default SignupForm;
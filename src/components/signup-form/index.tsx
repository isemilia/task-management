import { FC } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Box, Button } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';

import { FormLayout } from '@/ui/layouts/form';
import CTextField from '../form-controlled/controlled-text-field';
import { ISignupFormProps } from './model/signup-form.type';
import schema from './model/signup-form.schema';

const SignupForm: FC<ISignupFormProps> = ({ handleSubmit }) => {
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
                        <CTextField
                            name={'password'}
                            required
                            label={'Password'}
                            autoComplete={'off'} />
                        <CTextField
                            name={'repeatPassword'}
                            required
                            label={'Repeat password'}
                            autoComplete={'off'} />
                        <Button
                            onClick={methods.handleSubmit(onSubmit)}
                            variant={'contained'}
                            type={'submit'}>Log in</Button>
                    </FormLayout>
                </form>
            </FormProvider>
        </Box>
    );
}

export default SignupForm;
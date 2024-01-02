import { FC } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Box, Button } from "@mui/material";

import { FormLayout } from "@/ui/layouts/form";
import CTextField from "../form-controlled/controlled-text-field";
import { ISignupFormProps } from "./model/signup-form.type";

const SignupForm: FC<ISignupFormProps> = ({ handleSubmit }) => {
    const methods = useForm({
        defaultValues: {
            name: '',
            username: '',
            password: '',
            repeatPassword: ''
        }
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
                            name="name"
                            required
                            label={'Name'} />
                        <CTextField
                            name="username"
                            required
                            label={'Username'} />
                        <CTextField
                            name="password"
                            required
                            label={'Password'} />
                        <CTextField
                            name="repeatPassword"
                            required
                            label={'Repeat password'} />
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
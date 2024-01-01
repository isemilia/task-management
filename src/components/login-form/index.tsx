import { FC } from "react";
import { Box, Button, Paper } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import CTextField from "../form-controlled/controlled-text-field";
import { FormLayout } from "@/ui/layouts/form";

const LoginForm: FC<{ handleSubmit: (data: any) => void }> = ({ handleSubmit }) => {
	const methods = useForm({
		defaultValues: {
			username: '',
			password: ''
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
							name="username"
							required
							label={'Username'} />
						<CTextField
							name="password"
							required
							label={'Password'} />
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

export default LoginForm;
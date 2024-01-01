import { FC } from "react";
import { Box, Paper } from "@mui/material";

import LoginForm from "@/components/login-form";
import ModalTitle from "@/ui/modal/components/modal-title";

const Login: FC = () => {
	const handleSubmit = (data: any) => {
		console.log(data);
	}

	return (
		<Box sx={{ minHeight: '100vh', display: 'grid', placeContent: 'center' }}>
			<Paper sx={{ padding: ({ spacing }) => spacing(5) }}>
				<ModalTitle>Log in</ModalTitle>
				<LoginForm handleSubmit={handleSubmit} />
			</Paper>
		</Box>
	)
}

export default Login
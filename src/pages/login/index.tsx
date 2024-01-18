import { FC } from 'react';
import { Box, Paper } from '@mui/material';

import LoginForm from '@/components/login-form';
import ActionTitle from '@/ui/action-title';

const Login: FC = () => {
	const handleSubmit = (data: any) => {
		console.log(data);
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
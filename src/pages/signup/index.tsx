import { FC } from "react";
import { Box, Paper } from "@mui/material";

import SignupForm from "@/components/signup-form";
import ActionTitle from "@/ui/action-title";

const Signup: FC = () => {
    const handleSubmit = (data: any) => {
        console.log(data);
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
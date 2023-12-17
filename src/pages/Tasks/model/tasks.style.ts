import { styled, Box } from "@mui/material";

export const Column = styled(Box)(
    ({ theme }) => ({
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing(5)
    })
);

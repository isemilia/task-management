import { styled, Box } from "@mui/material";

export const Column = styled(Box)(
    ({ theme }) => ({
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing(5)
    })
);

export const CardHead = styled(Box)(
    () => ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    })
);

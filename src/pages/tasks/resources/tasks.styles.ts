import { styled, Box } from '@mui/material';

export const StyledColumn = styled(Box)(
    ({ theme }) => ({
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing(5)
    })
);

export const StyledColumnWrap = styled(Box)(
    ({ theme }) => ({
        display: 'grid',
        gridAutoColumns: 'clamp(200px, 100%, 340px)',
        gap: theme.spacing(5),
        gridAutoFlow: 'column',
        height: '100%',
    })
);

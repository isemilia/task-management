import { FC, ReactNode } from "react";

import { Typography } from "@mui/material";

const ModalTitle: FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <Typography sx={{ marginBottom: ({ spacing }) => spacing(3) }} variant={'h5'} component={'h2'}>
            {children}
        </Typography>
    )
}

export default ModalTitle;
import { Box } from "@mui/material";
import { FC, ReactNode } from "react";

const FormFooter: FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'row-reverse', gap: ({ spacing }) => spacing(5) }}>
            {children}
        </Box>
    )
}

export default FormFooter;
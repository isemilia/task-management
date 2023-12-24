import { Box } from "@mui/material";
import { FC, ReactNode } from "react";

const FormLayout: FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <Box sx={{ display: 'grid', gap: ({ spacing }) => spacing(5) }}>
            {children}
        </Box>
    )
}

export default FormLayout;
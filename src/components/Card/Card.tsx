import { FC, ReactNode } from "react";
import { Card as MuiCard } from "@mui/material";

const Card: FC<{ children?: ReactNode }> = ({ children }) => {
    return (
        <MuiCard sx={{ padding: ({ spacing }) => spacing(3) }}>
            {children}
        </MuiCard>
    )
}

export default Card
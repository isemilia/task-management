import { ChipOwnProps } from "@mui/material/Chip";
import { ReactNode } from "react";

export interface ICcolumnHeaderProps {
    label: ReactNode
    color?: ChipOwnProps['color']
    handleCreate: () => void
}
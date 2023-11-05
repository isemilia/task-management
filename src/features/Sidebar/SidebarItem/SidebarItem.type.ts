import { Theme } from "@emotion/react";
import { SxProps } from "@mui/material";
import { ReactNode } from "react";

export interface ISidebarItemProps {
    onClick?: () => void;
    icon: ReactNode;
    label: string
    sx?: SxProps<Theme>
    isOpen: boolean
}
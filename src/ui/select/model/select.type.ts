import { SelectProps } from "@mui/material";
import { ReactNode } from "react";

export interface ISelectOption {
    value: number | string
    label?: ReactNode
}

export interface ISelectProps extends SelectProps {
    options: ISelectOption[]
    handleSelect?: (data: ISelectOption) => void
}
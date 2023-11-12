import { ReactNode } from "react";

export interface ITaskCardProps {
    labels?: ReactNode[];
    title: string;
    description: string;
    date: string;
}
import { Chip } from "@mui/material";
import { ITaskCardProps } from "./task-card.type";

export const renderLabels = (labels: ITaskCardProps['labels']) => {
    if (labels) {
        return labels.map(label => (
            <Chip variant={'outlined'} label={label} />
        ));
    }
    return null;
}
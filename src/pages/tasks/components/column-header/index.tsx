import { FC } from "react";
import AddRoundedIcon from '@mui/icons-material/AddRounded';

import Card from "@/ui/card";
import { Chip, IconButton } from "@mui/material";
import { CardFrame } from "@/ui/card/resources/card.styles";
import { ICcolumnHeaderProps } from "@/pages/tasks/components/column-header/column-header.type";


const ColumnHeader: FC<ICcolumnHeaderProps> = ({ label, color = 'default', handleCreate }) => {
    return (
        <Card>
            <CardFrame>
                <Chip label={label} color={color} />
                <IconButton size={'small'} onClick={() => handleCreate()}>
                    <AddRoundedIcon />
                </IconButton>
            </CardFrame>
        </Card>
    )
}

export default ColumnHeader
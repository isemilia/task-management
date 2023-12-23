import { FC } from "react";
import Card from "../../../../components/card/card";
import { Chip, IconButton } from "@mui/material";
import { CardFrame } from "../../../../components/card/card.style";
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import { ICcolumnHeaderProps } from "./column-header.type";


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
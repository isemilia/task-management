import { FC } from "react";
import Card from "../../../components/Card/Card";
import { Chip, IconButton } from "@mui/material";
import { CardFrame } from "../../../components/Card/Card.style";
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import { ICcolumnHeaderProps } from "./ColumnHeader.type";


const ColumnHeader: FC<ICcolumnHeaderProps> = ({ label, color = 'default' }) => {
    return (
        <Card>
            <CardFrame>
                <Chip label={label} color={color} />
                <IconButton size={'small'}>
                    <AddRoundedIcon />
                </IconButton>
            </CardFrame>
        </Card>
    )
}

export default ColumnHeader
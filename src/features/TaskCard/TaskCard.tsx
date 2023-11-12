import { FC } from "react"
import { Box, IconButton, Typography, Divider } from "@mui/material"
import EventRoundedIcon from '@mui/icons-material/EventRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';

import Card from "../../components/Card/Card"
import { CardFrame } from "../../components/Card/Card.style";
import { ITaskCardProps } from "./TaskCard.type";
import { renderLabels } from "./utils";

const TaskCard: FC<ITaskCardProps> = ({ labels, title, description, date }) => {

    return (
        <Card>
            <CardFrame>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: ({ spacing }) => spacing(2) }}>
                    {renderLabels(labels)}
                </Box>
            </CardFrame>
            <Box sx={{ marginTop: ({ spacing }) => spacing(2) }}>
                <Typography component={'h3'} variant={'h6'}>{title}</Typography>
                <Typography variant={'body1'} sx={{ marginTop: ({ spacing }) => spacing() }}>{description}</Typography>
            </Box>
            <Divider sx={{ margin: ({ spacing }) => `${spacing(3)} 0` }} />
            <CardFrame>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: ({ spacing }) => spacing(2) }}>
                    <EventRoundedIcon />
                    <Box component={'span'} sx={{ fontSize: ({ typography }) => typography.body2, paddingTop: '2px' }}>
                        {date}
                    </Box>
                </Box>
                <IconButton size={'small'}>
                    <EditRoundedIcon />
                </IconButton>
            </CardFrame>
        </Card>
    )
}

export default TaskCard
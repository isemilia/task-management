import { FC } from "react"
import { Box, IconButton, Typography, Divider } from "@mui/material"
import EventRoundedIcon from '@mui/icons-material/EventRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';

import Card from "@/ui/card"
import { CardFrame } from "@/ui/card/model/card.style";
import { ITaskCardProps } from "@/components/task-card/model/task-card.type";
import { renderLabels } from "@/components/task-card/model/task-card.utils";

const TaskCard: FC<ITaskCardProps> = ({ labels, title, description, date, handleEdit }) => {

    return (
        <Card>
            <CardFrame>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: ({ spacing }) => spacing(2) }}>
                    {renderLabels(labels)}
                </Box>
            </CardFrame>
            <Box sx={{ marginTop: ({ spacing }) => spacing(2) }}>
                <Typography component={'h3'} variant={'h3'}>{title}</Typography>
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
                <IconButton size={'small'} onClick={() => handleEdit()}>
                    <EditRoundedIcon />
                </IconButton>
            </CardFrame>
        </Card>
    )
}

export default TaskCard
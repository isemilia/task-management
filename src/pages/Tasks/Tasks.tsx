import { Box, Chip, IconButton } from "@mui/material";
import { FC } from "react";

import AddRoundedIcon from '@mui/icons-material/AddRounded';

import Card from "../../components/Card/Card";
import { Column } from "./Tasks.style";
import { CardFrame } from "../../components/Card/Card.style";
import TaskCard from "../../features/TaskCard/TaskCard";

const Tasks: FC = () => {
    return (
        <Box sx={{ display: 'grid', gridAutoColumns: 'clamp(200px, 100%, 340px)', gap: ({ spacing }) => spacing(5), gridAutoFlow: 'column' }}>
            <Column>
                <Card>
                    <CardFrame>
                        <Chip label={'To do'} />
                        <IconButton size={'small'}>
                            <AddRoundedIcon />
                        </IconButton>
                    </CardFrame>
                </Card>

                <TaskCard title={'Task title'} description={'Slicing to the website from the design that has been made by the UI designer.'} date={'Nov 11, 2023'} />
            </Column>

            <Column>
                <Card>
                    <CardFrame>
                        <Chip label={'In progress'} color={'info'} />
                        <IconButton size={'small'}>
                            <AddRoundedIcon />
                        </IconButton>
                    </CardFrame>
                </Card>
            </Column>

            <Column>
                <Card>
                    <CardFrame>
                        <Chip label={'Stuck'} color={'warning'} />
                        <IconButton size={'small'}>
                            <AddRoundedIcon />
                        </IconButton>
                    </CardFrame>
                </Card>
            </Column>

            <Column>
                <Card>
                    <CardFrame>
                        <Chip label={'Done'} color={'success'} />
                        <IconButton size={'small'}>
                            <AddRoundedIcon />
                        </IconButton>
                    </CardFrame>
                </Card>
            </Column>
        </Box>
    )
}

export default Tasks;
import { Box, Chip, IconButton, Typography } from "@mui/material";
import { FC } from "react";

import AddRoundedIcon from '@mui/icons-material/AddRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';

import Card from "../../components/Card/Card";
import { CardHead, Column } from "./Tasks.style";

const Tasks: FC = () => {
    return (
        <Box sx={{ display: 'grid', gridAutoColumns: 'clamp(200px, 100%, 340px)', gap: ({ spacing }) => spacing(5), gridAutoFlow: 'column' }}>
            <Column>
                <Card>
                    <CardHead>
                        <Chip label={'To do'} />
                        <IconButton size={'small'}>
                            <AddRoundedIcon />
                        </IconButton>
                    </CardHead>
                </Card>

                <Card>
                    <CardHead>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: ({ spacing }) => spacing(2) }}>
                            <Chip variant={'outlined'} label={'UI/UX'} />
                            <Chip variant={'outlined'} label={'Design'} />
                        </Box>
                        <IconButton size={'small'}>
                            <EditRoundedIcon />
                        </IconButton>
                    </CardHead>
                    <Box sx={{ marginTop: ({ spacing }) => spacing(2) }}>
                        <Typography component={'h3'} variant={'h6'}>Task title</Typography>
                        <Typography variant={'body1'} sx={{ marginTop: ({ spacing }) => spacing() }}>Slicing to the website from the design that has been made by the UI designer.</Typography>
                    </Box>
                </Card>
            </Column>

            <Column>
                <Card>
                    <CardHead>
                        <Chip label={'In progress'} color={'info'} />
                        <IconButton size={'small'}>
                            <AddRoundedIcon />
                        </IconButton>
                    </CardHead>
                </Card>
            </Column>

            <Column>
                <Card>
                    <CardHead>
                        <Chip label={'Stuck'} color={'warning'} />
                        <IconButton size={'small'}>
                            <AddRoundedIcon />
                        </IconButton>
                    </CardHead>
                </Card>
            </Column>

            <Column>
                <Card>
                    <CardHead>
                        <Chip label={'Done'} color={'success'} />
                        <IconButton size={'small'}>
                            <AddRoundedIcon />
                        </IconButton>
                    </CardHead>
                </Card>
            </Column>
        </Box>
    )
}

export default Tasks;
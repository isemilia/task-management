import { Box } from "@mui/material";
import { FC } from "react";

import { Column } from "./Tasks.style";
import TaskCard from "../../features/task-card";
import ColumnHeader from "./ColumnHeader/ColumnHeader";

const Tasks: FC = () => {
    return (
        <Box sx={{ display: 'grid', gridAutoColumns: 'clamp(200px, 100%, 340px)', gap: ({ spacing }) => spacing(5), gridAutoFlow: 'column' }}>
            <Column>
                <ColumnHeader label={'To do'} />

                <TaskCard title={'Task title'} description={'Slicing to the website from the design that has been made by the UI designer.'} date={'Nov 11, 2023'} />
            </Column>

            <Column>
                <ColumnHeader label={'In progress'} color={'info'} />
            </Column>

            <Column>
                <ColumnHeader label={'Stuck'} color={'warning'} />
            </Column>

            <Column>
                <ColumnHeader label={'Done'} color={'success'} />
            </Column>
        </Box>
    )
}

export default Tasks;
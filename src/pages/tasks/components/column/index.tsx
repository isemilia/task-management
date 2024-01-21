import { FC } from 'react';
import { Box } from '@mui/material';
import { Droppable, Draggable } from 'react-beautiful-dnd';

import TaskCard from '@/components/task-card';
import { StyledColumn } from '@/pages/tasks/resources/tasks.styles';
import ColumnHeader from '../column-header';
import { IColumnProps } from '../../resources/tasks.model';
import DraggableTaskCard from '../draggable-task-card';

const TaskColumn: FC<IColumnProps> = ({ status, tasks, handleCreate, handleEdit }) => {
  return (
    <StyledColumn key={status.id}>
      <ColumnHeader
        label={status.title}
        handleCreate={handleCreate} />

      <Droppable droppableId={`${status.id}`}>
        {(provided, snapshot) => (
          <Box
            sx={{
              display: 'grid',
              gap: ({ spacing }) => spacing(5),
            }}
            ref={provided.innerRef}
            {...provided.droppableProps}>
            {
              tasks
                .map((task, i) => (
                  <DraggableTaskCard
                    key={task.id}
                    handleEdit={(handleEdit)}
                    index={i}
                    task={task} />
                ))
            }
          </Box>
        )}
      </Droppable>

    </StyledColumn>
  )
}

export default TaskColumn
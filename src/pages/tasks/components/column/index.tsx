import { FC, Fragment } from 'react';
import { Box, alpha } from '@mui/material';
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
        {(provided, snapshot) => {
          return (
            <>
              <Box
                key={status.id}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  // gap: ({ spacing }) => spacing(5),
                  ...(snapshot.isDraggingOver ? {
                    background: ({ palette }) => alpha(palette.primary.light, 0.1),
                  } : {})
                }}
                ref={provided.innerRef}
                {...provided.droppableProps}>
                {
                  tasks
                    .map((task, i) => {
                      return (
                        <DraggableTaskCard
                          key={task._id}
                          handleEdit={(handleEdit)}
                          index={i}
                          task={task} />
                      )
                    })
                }
                {provided.placeholder}
              </Box>
            </>
          )
        }}
      </Droppable>

    </StyledColumn>
  )
}

export default TaskColumn
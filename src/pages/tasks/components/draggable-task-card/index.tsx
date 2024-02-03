import TaskCard from '@/components/task-card';
import { Box } from '@mui/material';
import { FC } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { IDraggableTaskCardProps } from '../../resources/tasks.model';

const DraggableTaskCard: FC<IDraggableTaskCardProps> = ({ task, index, handleEdit }) => {
  return (
    <Draggable draggableId={`${task._id}`} index={index}>
      {(provided, snapshot) => {
        return (
          <Box
            ref={provided.innerRef}
            sx={{
              padding: '10px 0'
            }}
            {...provided.draggableProps}
            {...provided.dragHandleProps}>
            <TaskCard
              date={task.deadline}
              title={task.title}
              description={task.description}
              handleEdit={() => handleEdit(task.id)} />
          </Box>
        )
      }}
    </Draggable >
  )
}

export default DraggableTaskCard;
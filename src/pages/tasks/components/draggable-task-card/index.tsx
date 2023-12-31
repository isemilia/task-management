import TaskCard from '@/components/task-card';
import { Box } from '@mui/material';
import { FC } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { IDraggableTaskCardProps } from '../../model/tasks.type';

const DraggableTaskCard: FC<IDraggableTaskCardProps> = ({ task, index, handleEdit }) => {
  return (
    <Draggable draggableId={`${task.id}`} index={index}>
      {(provided, snapshot) => (
        <Box
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}>
          <TaskCard
            key={task.id}
            date={task.date}
            title={task.title}
            description={task.description}
            handleEdit={() => handleEdit(task.id)} />
        </Box>
      )}
    </Draggable>
  )
}

export default DraggableTaskCard;
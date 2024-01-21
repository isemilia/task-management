import { Box } from '@mui/material';
import { FC, useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';

import { testTasks, testStatuses } from '@/shared/data/data';
import EditTask from '@/features/edit-task';
import CreateTask from '@/features/create-task';
import TaskColumn from './components/column';

const Tasks: FC = () => {
  const [currentTask, setCurrentTask] = useState<null | number>(null);
  const [currentStatus, setCurrentStatus] = useState<null | number>(null);

  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [isCreateModalOpen, setCreateModalOpen] = useState(false);

  const toggleEditModal = () => setEditModalOpen(state => !state);
  const openCreateModal = (status: number) => {
    setCurrentStatus(status);
    setCreateModalOpen(state => !state);
  }

  return (
    <DragDropContext onDragEnd={(result) => {
      console.log(result);
    }}>
      <Box sx={{ display: 'grid', gridAutoColumns: 'clamp(200px, 100%, 340px)', gap: ({ spacing }) => spacing(5), gridAutoFlow: 'column' }}>
        {
          testStatuses.map(status => {
            return (
              <TaskColumn
                key={status.id}
                status={status}
                tasks={testTasks.filter(task => task.status.id === status.id)}
                handleCreate={() => openCreateModal(status.id)}
                handleEdit={(taskId) => {
                  setCurrentTask(taskId);
                  toggleEditModal();
                }} />
            )
          })
        }

        <CreateTask
          isOpen={isCreateModalOpen}
          handleToggle={() => setCreateModalOpen(state => !state)}
          defaultValues={
            currentStatus ? { status: currentStatus } : undefined
          } />
        <EditTask
          isOpen={isEditModalOpen}
          handleToggle={() => setEditModalOpen(state => !state)}
          id={currentTask} />
      </Box>
    </DragDropContext>
  )
}

export default Tasks;
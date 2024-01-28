import { Box } from '@mui/material';
import { FC, useEffect, useState } from 'react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';

import { testTasks, testStatuses } from '@/shared/data/data';
import EditTask from '@/features/edit-task';
import CreateTask from '@/features/create-task';
import TaskColumn from './components/column';
import { useGetMyTasksQuery } from '@/shared/api/queries/tasks';

const Tasks: FC = () => {
  const [currentTask, setCurrentTask] = useState<null | number>(null);
  const [currentStatus, setCurrentStatus] = useState<null | number>(null);

  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [isCreateModalOpen, setCreateModalOpen] = useState(false);

  const [tasks, setTasks] = useState<any[]>([])

  const tasksReq = useGetMyTasksQuery({});

  useEffect(() => {
    if (tasksReq.isSuccess) {
      const { result } = tasksReq.data;
      if (result.tasks && Array.isArray(result.tasks)) {
        setTasks(result.tasks);
      } else {
        console.error('Invalid task format');
      }
    }
    if (tasksReq.isError) {
      setTasks([]);
    }
  }, [tasksReq.isError, tasksReq.isFetching, tasksReq.isSuccess])

  const toggleEditModal = () => setEditModalOpen(state => !state);
  const openCreateModal = (status: number) => {
    setCurrentStatus(status);
    setCreateModalOpen(state => !state);
  }

  const handleDragEnd = (result: DropResult) => {
    const task = result.draggableId;
    const column = result.destination?.droppableId;
    console.log(task, column);
  }

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Box sx={{ display: 'grid', gridAutoColumns: 'clamp(200px, 100%, 340px)', gap: ({ spacing }) => spacing(5), gridAutoFlow: 'column' }}>
        {
          testStatuses.map(status => {
            return (
              <TaskColumn
                key={status.id}
                status={status}
                tasks={tasks.filter(task => task.status.id === status.id)}
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
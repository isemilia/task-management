import { Box } from '@mui/material';
import { FC, useEffect, useState } from 'react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';

import { testTasks, testStatuses } from '@/shared/data/data';
import EditTask from '@/features/edit-task';
import CreateTask from '@/features/create-task';
import TaskColumn from './components/column';
import { useGetMyTasksQuery } from '@/shared/api/queries/tasks';
import { StyledColumnWrap } from './resources/tasks.styles';
import TasksSkeleton from './components/tasks-skeleton';

const Tasks: FC = () => {
  const [currentTask, setCurrentTask] = useState<null | number>(null);
  const [currentStatus, setCurrentStatus] = useState<null | number>(null);

  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [isCreateModalOpen, setCreateModalOpen] = useState(false);

  const [tasks, setTasks] = useState<any[]>([]);

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
  }, [tasksReq.isError, tasksReq.isFetching, tasksReq.isSuccess]);

  const toggleEditModal = () => setEditModalOpen((state) => !state);
  const openCreateModal = (status: number) => {
    setCurrentStatus(status);
    setCreateModalOpen((state) => !state);
  };

  const handleDragEnd = (result: DropResult) => {
    const task = result.draggableId;
    const to = result.destination?.droppableId;
    const from = result.source?.droppableId;
    console.log(task, to, from);
  };

  if (tasksReq.isFetching) {
    return <TasksSkeleton />;
  }

  return (
    <>
      <DragDropContext onDragEnd={handleDragEnd}>
        <StyledColumnWrap>
          {testStatuses.map((status) => {
            return (
              <TaskColumn
                key={status.id}
                status={status}
                tasks={tasks.filter((task) => task.status.id === status.id)}
                handleCreate={() => openCreateModal(status.id)}
                handleEdit={(taskId) => {
                  setCurrentTask(taskId);
                  toggleEditModal();
                }}
              />
            );
          })}
        </StyledColumnWrap>
      </DragDropContext>
      <CreateTask
        isOpen={isCreateModalOpen}
        handleToggle={() => setCreateModalOpen((state) => !state)}
        defaultValues={currentStatus ? { status: currentStatus } : undefined}
      />
      <EditTask
        isOpen={isEditModalOpen}
        handleToggle={() => setEditModalOpen((state) => !state)}
        id={currentTask}
      />
    </>
  );
};

export default Tasks;

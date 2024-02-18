import {FC, useEffect} from 'react';

import Modal from '@/ui/modal';
import { ICreateTaskProps } from '@/features/create-task/resources/create-task.model';
import TaskForm from '@/components/task-form';
import { ITaskFormData } from '@/components/task-form/resources/task-form.model';
import ActionTitle from '@/ui/action-title';
import {useCreateTaskMutation} from '@/shared/api/queries/tasks';
import {CircularProgress} from '@mui/material';

const CreateTask: FC<ICreateTaskProps> = ({ isOpen, handleToggle, defaultValues }) => {
  const [createTask, taskReq] = useCreateTaskMutation();

  useEffect(() => {
    if (taskReq.isSuccess) {
      handleToggle();
    }
  }, [taskReq.isError, taskReq.isSuccess, taskReq.isLoading]);

  const handleSubmit = (data: ITaskFormData) => {
    createTask({
      ...data,
      status: {
        id: data.status
      },
      deadline: `${new Date().getTime()}`
    });
    // console.log(data);
  }

  return (
    <Modal isOpen={isOpen} handleToggle={handleToggle}>
      <ActionTitle>
        New task
        {
          taskReq.isLoading
            ? <CircularProgress
              sx={{
                width: '20px !important',
                height: '20px !important',
                marginLeft: ({spacing}) => spacing(4)}}
            />
            : ''
        }
      </ActionTitle>
      <TaskForm defaultValues={defaultValues} handleSubmit={handleSubmit} />
    </Modal>
  )
}

export default CreateTask;
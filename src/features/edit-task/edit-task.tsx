import { FC, useState } from 'react'

import TaskForm from '@/components/task-form'
import { ITaskFormData } from '@/components/task-form/resources/task-form.model'
import Modal from '@/ui/modal'
import ActionTitle from '@/ui/action-title'
import { IEditTaskProps } from './resources/edit-task.model'
import { TaskModalSkeleton } from '@/components/skeleton'

const EditTask: FC<IEditTaskProps> = ({ isOpen, handleToggle, id }) => {
  const [defaults, setDefaults] = useState<Partial<ITaskFormData>>({});

  const handleSubmit = (data: ITaskFormData) => {
    console.log(data);
  }

  return (
    <Modal isOpen={isOpen} handleToggle={handleToggle}>
      {!id
        ? (
          <>
            <ActionTitle>New task</ActionTitle>
            <TaskForm defaultValues={defaults} handleSubmit={handleSubmit} />
          </>
        )
        : <TaskModalSkeleton />
      }

    </Modal>
  )
}

export default EditTask
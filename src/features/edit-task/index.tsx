import TaskForm from "@/components/task-form"
import { ITaskFormData } from "@/components/task-form/model/task-form.type"
import Modal from "@/ui/modal"
import ActionTitle from "@/ui/action-title"
import { FC, useState } from "react"
import { IEditTaskProps } from "./model/edit-task.type"
import { TaskModalSkeleton } from "@/components/skeleton"

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
import { FC } from "react";

import Modal from "@/ui/modal";
import { ICreateTaskProps } from "@/features/create-task/model/create-task.type";
import TaskForm from "@/components/task-form";
import { ITaskFormData } from "@/components/task-form/resources/task-form.model";
import ActionTitle from "@/ui/action-title";

const CreateTask: FC<ICreateTaskProps> = ({ isOpen, handleToggle, defaultValues }) => {
    const handleSubmit = (data: ITaskFormData) => {
        console.log(data);
    }

    return (
        <Modal isOpen={isOpen} handleToggle={handleToggle}>
            <ActionTitle>New task</ActionTitle>
            <TaskForm defaultValues={defaultValues} handleSubmit={handleSubmit} />
        </Modal>
    )
}

export default CreateTask;
import { FC } from "react";

import Modal from "../../ui/modal";
import { ICreateTaskProps } from "./model/create-task.type";
import TaskForm from "../../components/task-form";
import { ITaskFormData } from "../../components/task-form/model/task-form.type";

const CreateTask: FC<ICreateTaskProps> = ({ isOpen, handleToggle }) => {
    const handleSubmit = (data: ITaskFormData) => {
        console.log(data);
    }

    return (
        <Modal isOpen={isOpen} handleToggle={handleToggle}>
            <TaskForm handleSubmit={handleSubmit} />
        </Modal>
    )
}

export default CreateTask;
import { FC } from "react";

import Modal from "../../ui/modal";
import { ICreateTaskProps } from "./model/create-task.type";
import TaskForm from "../../components/task-form";

const CreateTask: FC<ICreateTaskProps> = ({isOpen, handleToggle}) => {
    return (
        <Modal isOpen={isOpen} handleToggle={handleToggle}>
            <TaskForm/>
        </Modal>
    )
}

export default CreateTask;
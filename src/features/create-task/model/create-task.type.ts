import { ITaskFormProps } from "@/components/task-form/model/task-form.type";
import { IModalProps } from "@/ui/modal/model/modal.type";

export interface ICreateTaskProps {
    isOpen: IModalProps['isOpen'];
    handleToggle: IModalProps['handleToggle'];
    defaultValues?: Partial<ITaskFormProps['defaultValues']>;
}
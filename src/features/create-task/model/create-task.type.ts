import { IModalProps } from "@/ui/modal/model/modal.type";

export interface ICreateTaskProps {
    isOpen: IModalProps['isOpen'];
    handleToggle: IModalProps['handleToggle'];
}
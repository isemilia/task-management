import { IModalProps } from "../../../components/modal/model/modal.type";

export interface ICreateTaskProps {
    isOpen: IModalProps['isOpen'];
    handleToggle: IModalProps['handleToggle'];
}
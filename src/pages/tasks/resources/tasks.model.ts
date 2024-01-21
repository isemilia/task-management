export interface IColumnProps {
  status: any;
  tasks: any[];
  handleCreate: () => void;
  handleEdit: (taskId: number) => void;
}

export interface IDraggableTaskCardProps {
  task: any;
  handleEdit: (taskId: number) => void;
  index: number;
}
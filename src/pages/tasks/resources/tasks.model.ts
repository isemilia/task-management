import { ChipOwnProps } from '@mui/material';
import { ReactNode } from 'react';

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

export interface ICcolumnHeaderProps {
  label: ReactNode
  color?: ChipOwnProps['color']
  handleCreate: () => void
}
import { Box } from '@mui/material';
import { FC, useState } from 'react';
import CreateTask from '@/features/create-task';

import { Column } from '@/pages/tasks/model/tasks.style';
import TaskCard from '@/components/task-card';
import ColumnHeader from '@/pages/tasks/components/column-header';
import { testTasks, testStatuses } from '@/shared/model/data/data';
import EditTask from '@/features/edit-task';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

const Tasks: FC = () => {
	const [currentTask, setCurrentTask] = useState<null | number>(null);
	const [currentStatus, setCurrentStatus] = useState<null | number>(null);

	const [isEditModalOpen, setEditModalOpen] = useState(false);
	const [isCreateModalOpen, setCreateModalOpen] = useState(false);

	const toggleEditModal = () => setEditModalOpen(state => !state);
	const openCreateModal = (status: number) => {
		setCurrentStatus(status);
		setCreateModalOpen(state => !state);
	}

	return (
		<DragDropContext onDragEnd={(result) => {
			console.log(result);
		}}>
			<Box sx={{ display: 'grid', gridAutoColumns: 'clamp(200px, 100%, 340px)', gap: ({ spacing }) => spacing(5), gridAutoFlow: 'column' }}>
				{
					testStatuses.map(status => {
						return (
							<Column key={status.id}>
								<ColumnHeader
									label={status.title}
									handleCreate={() => openCreateModal(status.id)} />

								<Droppable droppableId={`${status.id}`}>
									{(provided, snapshot) => (
										<Box
											sx={{
												display: 'grid',
												gap: ({ spacing }) => spacing(5),
											}}
											ref={provided.innerRef}
											{...provided.droppableProps}>
											{
												testTasks
													.filter(task => task.status.id === status.id)
													.map((task, i) => (
														<Draggable key={task.id} draggableId={`${task.id}`} index={i}>
															{(dragProvided, dragSnapshot) => (
																<Box
																	ref={dragProvided.innerRef}
																	{...dragProvided.draggableProps}
																	{...dragProvided.dragHandleProps}>
																	<TaskCard
																		key={task.id}
																		date={task.date}
																		title={task.title}
																		description={task.description}
																		handleEdit={() => {
																			setCurrentTask(task.id);
																			toggleEditModal();
																		}} />
																</Box>
															)}
														</Draggable>
													))
											}
										</Box>
									)}
								</Droppable>

							</Column>
						)
					})
				}

				<CreateTask
					isOpen={isCreateModalOpen}
					handleToggle={() => setCreateModalOpen(state => !state)}
					defaultValues={
						currentStatus ? { status: currentStatus } : undefined
					} />
				<EditTask
					isOpen={isEditModalOpen}
					handleToggle={() => setEditModalOpen(state => !state)}
					id={currentTask} />
			</Box>
		</DragDropContext>
	)
}

export default Tasks;
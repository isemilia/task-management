import { Box, Typography } from "@mui/material";
import { FC, useState } from "react";

import { Column } from "./model/tasks.style";
import TaskCard from "../../features/task-card";
import ColumnHeader from "./components/column-header";
import Modal from "../../components/modal";
import { testTasks, testStatuses } from "../../shared/model/data/data";

const Tasks: FC = () => {
	const [currentTask, setCurrentTask] = useState<null | number>(null);
	const [isModalOpen, setModalOpen] = useState(false);

	const toggleModal = () => setModalOpen(state => !state);

	return (
		<Box sx={{ display: 'grid', gridAutoColumns: 'clamp(200px, 100%, 340px)', gap: ({ spacing }) => spacing(5), gridAutoFlow: 'column' }}>
			{
				testStatuses.map(status => {
					return (
						<Column>
							<ColumnHeader key={status.id} label={status.title} handleCreate={() => console.log(status)} />
							{
								testTasks
									.filter(task => task.status.id === status.id)
									.map(task => (
										<TaskCard
											date={task.date}
											title={task.title}
											description={task.description}
											handleEdit={() => {
												setCurrentTask(task.id);
												toggleModal();
											}} />
									))
							}
						</Column>
					)
				})
			}

			<Modal isOpen={isModalOpen} handleToggle={toggleModal}>
				<Typography>Edit</Typography>
			</Modal>
		</Box>
	)
}

export default Tasks;
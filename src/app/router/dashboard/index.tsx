import Sidebar from "@/components/sidebar";
import { useCustomTheme } from "@/shared/model/hooks/use-custom-theme";
import { Box } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

const Dashboard: FC = () => {
	const theme = useCustomTheme();

	const sidebarState = localStorage.getItem('sidebarState');
	const [isOpen, setOpen] = useState<boolean>((sidebarState && JSON.parse(sidebarState)) || true);

	const toggleSidebar = () => {
		setOpen(state => !state)
	}

	useEffect(() => {
		localStorage.setItem('sidebarState', JSON.stringify(isOpen))
	}, [isOpen])

	return (
		<Box sx={{ display: 'flex', maxWidth: '100vw' }}>
			<Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
			<Box sx={{ padding: theme.spacing(6), width: '100%' }}>
				<Outlet />
			</Box>
		</Box>
	)
}

export default Dashboard
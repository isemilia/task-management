import CloseFullscreenRoundedIcon from '@mui/icons-material/CloseFullscreenRounded';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import OpenInFullRoundedIcon from '@mui/icons-material/OpenInFullRounded';
import { Box } from "@mui/material";
import { FC } from "react";
import { useCustomTheme } from "../../hooks/useCustomTheme/useCustomTheme";
import { Drawer } from './Sidebar.style';
import { ISidebarProps } from "./Sidebar.type";
import SidebarItem from "./SidebarItem/SidebarItem";
import { Link, NavLink } from 'react-router-dom';

const Sidebar: FC<ISidebarProps> = ({ isOpen, toggleSidebar }) => {
    const theme = useCustomTheme();

    const navOptions = [
        { icon: <HomeRoundedIcon />, label: 'Home', name: 'home', href: '/' },
        { icon: <DashboardRoundedIcon />, label: 'Tasks', name: 'board', href: '/tasks' },
    ]

    return (
        <Drawer variant={'permanent'} open={isOpen}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    height: '100%',
                    padding: theme.spacing(3)
                }}>
                <Box component={'ul'} sx={{ padding: 0, margin: 0 }}>
                    {
                        navOptions.map(item => (
                            <NavLink style={{ textDecoration: 'none', color: 'inherit' }} key={item.name} to={item.href}>
                                {({ isActive }) => (
                                    <SidebarItem
                                        isOpen={isOpen}
                                        label={item.label}
                                        icon={item.icon}
                                        isActive={isActive} />
                                )}
                            </NavLink>
                        ))
                    }
                </Box>

                <Box component={'ul'} sx={{ padding: 0, margin: 0 }}>
                    <SidebarItem
                        isOpen={isOpen}
                        label={'Collapse'}
                        icon={
                            isOpen
                                ? <CloseFullscreenRoundedIcon />
                                : <OpenInFullRoundedIcon />
                        }
                        onClick={toggleSidebar} />
                </Box>
            </Box>
        </Drawer>
    )
}

export default Sidebar;
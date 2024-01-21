import { FC, useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { Box } from '@mui/material';
import CloseFullscreenRoundedIcon from '@mui/icons-material/CloseFullscreenRounded';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import OpenInFullRoundedIcon from '@mui/icons-material/OpenInFullRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';

import { useCustomTheme } from '@/shared/hooks/custom-theme';

import { Drawer, SidebarInnerWrap, StyledNavLink } from '@/components/sidebar/resources/sidebar.styles';
import { ISidebarProps } from '@/components/sidebar/resources/sidebar.model';
import SidebarItem from '@/components/sidebar/components/sidebar-item';
import { AuthContext } from '@/shared/contexts/auth-context';

const Sidebar: FC<ISidebarProps> = ({ isOpen, toggleSidebar }) => {
  const theme = useCustomTheme();
  const { user } = useContext(AuthContext);

  const navOptions = [
    { icon: <HomeRoundedIcon />, label: 'Home', name: 'home', href: '/' },
    { icon: <DashboardRoundedIcon />, label: 'Tasks', name: 'board', href: '/tasks' },
  ]

  return (
    <Drawer variant={'permanent'} open={isOpen}>
      <SidebarInnerWrap>
        <Box component={'ul'} sx={{ padding: 0, margin: 0 }}>
          {
            navOptions.map(item => (
              <StyledNavLink key={item.name} to={item.href}>
                {({ isActive }) => (
                  <SidebarItem
                    isOpen={isOpen}
                    label={item.label}
                    icon={item.icon}
                    isActive={isActive} />
                )}
              </StyledNavLink>
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
          <StyledNavLink to={'/account'}>
            {({ isActive }) => (
              <SidebarItem
                icon={<AccountCircleRoundedIcon />}
                isOpen={isOpen}
                label={user?.name || '~'}
                isActive={isActive} />
            )}
          </StyledNavLink>
        </Box>
      </SidebarInnerWrap>
    </Drawer>
  )
}

export default Sidebar;
import { FC, useEffect, useState } from 'react';

import { Box } from '@mui/material';
import { useCustomTheme } from '../hooks/useCustomTheme/useCustomTheme';

import AppRouter from '../router/router';
import Sidebar from '../features/Sidebar';

const App: FC = () => {
  const theme = useCustomTheme();

  const [isOpen, setOpen] = useState<boolean>(JSON.parse(localStorage.getItem('sidebarState') ?? '') ?? true)

  const toggleSidebar = () => {
    setOpen(state => !state)
  }

  useEffect(() => {
    localStorage.setItem('sidebarState', JSON.stringify(isOpen))
  }, [isOpen])

  return (
    <Box sx={{ display: 'flex', columnGap: theme.spacing(6) }}>
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <Box sx={{ padding: `${theme.spacing(6)} 0` }}>
        <AppRouter />
      </Box>
    </Box>
  )
}

export default App

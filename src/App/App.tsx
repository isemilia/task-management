import { Box } from '@mui/material';

import { FC, useState } from 'react';
import Sidebar from '../features/Sidebar';

const App: FC = () => {
  // const theme = useCustomTheme();

  const [isOpen, setOpen] = useState(false)

  const toggleSidebar = () => {
    setOpen(state => !state)
  }

  return (
    <Box display={'flex'}>
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
    </Box>
  )
}

export default App

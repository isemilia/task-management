import { FC } from 'react';
import { Provider } from 'react-redux';
import { Box } from '@mui/material';

import AppRouter from './router';
import { store } from './store';
import { AuthProvider } from '@/shared/contexts/auth-context';

const App: FC = () => {

  return (
    <Box>
      <Provider store={store}>
        <AuthProvider>
          <AppRouter />
        </AuthProvider>
      </Provider>
    </Box>
  )
}

export default App

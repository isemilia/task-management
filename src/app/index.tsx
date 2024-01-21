import { FC } from 'react';

import { Box } from '@mui/material';
import AppRouter from './router/router';
import { Provider } from 'react-redux';
import { store } from './store';
import { AuthProvider } from './auth-context';

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

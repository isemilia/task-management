import { FC } from 'react';

import { Box } from '@mui/material';
import AppRouter from './router/router';
import { Provider } from 'react-redux';
import { store } from './store';

const App: FC = () => {

  return (
    <Box>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </Box>
  )
}

export default App

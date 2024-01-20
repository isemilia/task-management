import { FC } from 'react';
import {
    Route,
    Routes,
} from 'react-router-dom';

import Home from '@/pages/home';
import Login from '@/pages/login';
import Signup from '@/pages/signup';
import Tasks from '@/pages/tasks';
import Dashboard from './dashboard';

const routes = [
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/tasks',
        element: <Tasks />,
    }
];

const AppRouter: FC = () => {
    return (
        <Routes>
            <Route path={'/login'} element={<Login />} />
            <Route path={'/signup'} element={<Signup />} />
            <Route element={<Dashboard />}>
                {
                    routes.map(route => (
                        <Route key={route.path} path={route.path} element={route.element} />
                    ))
                }
            </Route>
        </Routes>
    )
}

export default AppRouter
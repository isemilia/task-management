import { FC } from "react";
import {
    Route,
    Routes,
} from "react-router-dom";

import Home from "../pages/Home/Home";
import Tasks from "../pages/Tasks/Tasks";

const routes = [
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/tasks",
        element: <Tasks />,
    },
];

const AppRouter: FC = () => {
    return (
        <Routes>
            {
                routes.map(route => (
                    <Route key={route.path} path={route.path} element={route.element} />
                ))
            }
        </Routes>
    )
}

export default AppRouter
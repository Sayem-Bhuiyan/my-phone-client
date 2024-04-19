import { createBrowserRouter } from "react-router-dom"
import Root from "../Pages/Root";
import Home from "../Pages/Home";
import Phones from "../Pages/Phones";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/phones',
                element: <Phones />,
                loader: () => fetch('http://localhost:3000/phones')
            }
        ]
    }
])

export default routes;
import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Details from "../Pages/Details/Details";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'details/:id',
                element: <Details></Details>,
                loader: ({params}) => fetch(`https://ca-server-eta.vercel.app/details/${params.id}`)
            }
        ]
    },
]);
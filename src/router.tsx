import { createBrowserRouter, Navigate } from "react-router-dom";

import GuestLayouts from "../src/layouts/GuestLayouts.tsx"
import Home from "../src/pages/Home.tsx"
import Blog from "./pages/Blog.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <GuestLayouts/>,
        children: [
            {
                path: "/",
                element: <Navigate to="/home"/>
            },
            {
                path: "/home",
                element: <Home/>
            },
            {
                path: "/blog",
                element: <Blog/>
            },
           
        ]
    }
])

export default router;
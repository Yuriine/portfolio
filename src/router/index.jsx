import { createBrowserRouter } from "react-router-dom";


import Content from "../pages/content";
import App from "../App";
import Clases from "../pages/clases";
export const router = createBrowserRouter([

    {
        path: "/content",
        element: <Content />
    },
    {
        path: "/",
        element: <App />
    },
    {
        path: "/clases",
        element: <Clases />
    }

]);
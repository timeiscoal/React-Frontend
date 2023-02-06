import { createBrowserRouter } from "react-router-dom";
import Roots from "./components/Root";
import Home from "./routes/Home";

const router = createBrowserRouter([
    {
    path:"/",
    element: <Roots />,
    children:[
        {
            path:"",
            element : <Home />,

        },

    ],



    },

])

export default router
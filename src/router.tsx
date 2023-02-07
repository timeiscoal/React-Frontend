import { createBrowserRouter } from "react-router-dom";
import Roots from "./components/Root";
import Home from "./routes/Home";
import NotFound from "./routes/NotFound";

const router = createBrowserRouter([
    {
    path:"/",
    element: <Roots />,
    errorElement:<NotFound />,
    children:[
        {
            path:"",
            element : <Home />,

        },

    ],



    },

])

export default router
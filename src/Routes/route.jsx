import { createBrowserRouter } from "react-router-dom";
import Main from "../component/LayOut/Main";
import Home from "../component/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:'/',
        element: <Home></Home>
      }
    ]
  },
]);

export default router;

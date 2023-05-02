import { createBrowserRouter } from "react-router-dom";
import Main from "../component/LayOut/Main";
import Home from "../component/Home/Home";
import Blog from "../component/Blog/Blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:'/',
        element: <Home></Home>
      },
      {
        path:"/blog",
        element:<Blog></Blog>
      }
    ]
  },
]);

export default router;

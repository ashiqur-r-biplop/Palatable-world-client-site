import { createBrowserRouter } from "react-router-dom";
import Main from "../component/LayOut/Main";
import Home from "../component/Home/Home";
import Blog from "../component/Blog/Blog";
import Recipe from "../component/Recipe/Recipe";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/recipes",
        element: <Recipe></Recipe>,
        loader: () =>
          fetch(
            "https://palatable-world-client-site-ashiqur23.vercel.app/recipes/all"
          ),
      },
    ],
  },
]);

export default router;

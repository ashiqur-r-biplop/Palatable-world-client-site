import { createBrowserRouter } from "react-router-dom";
import Main from "../component/LayOut/Main";
import Home from "../component/Home/Home";
import Blog from "../component/Blog/Blog";
import Recipe from "../component/Recipe/Recipe";
import SingleChefDetail from "../component/SingleChefDetail/SingleChefDetail";
import Login from "../component/Login/Login";
import Register from "../component/Login/Register";
import ErrorPage from "../component/ErrorPage/ErrorPage";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
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
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/recipes",
        element: <Recipe></Recipe>,
        loader: () =>
          fetch(
            "https://palatable-world-client-site-ashiqur23.vercel.app/recipes/all"
          ),
      },
      {
        path: "/recipe/:id",
        element: (
          <PrivateRoute>
            <SingleChefDetail></SingleChefDetail>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://palatable-world-client-site-ashiqur23.vercel.app/recipes/${params.id}`
          ),
      },
    ],
  },
]);

export default router;

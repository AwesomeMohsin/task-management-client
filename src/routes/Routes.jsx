import {
  createBrowserRouter
} from "react-router-dom";
import Root from "../layouts/Root";
import ErrorPage from "../layouts/ErrorPage";
import Home from "../pages/Home/Home";
import Login from "../pages/AccountServices/Login";
import Register from "../pages/AccountServices/Register";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../layouts/Dashboard";
import AddTask from "../pages/Dashboard/AddTask";
import Tasks from "../pages/Dashboard/Tasks/Tasks";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },


    ]
  },
  {
    path: '/dashboard',
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      {
        path: 'add-task',
        element: <AddTask></AddTask>
    },
    {
        path: 'tasks',
        element: <Tasks></Tasks>
    },
    ]
  }
]);

export default router;
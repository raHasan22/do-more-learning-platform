import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import CourseDetail from "../pages/CourseDetail/CourseDetail";
import Courses from "../pages/Courses/Courses";
import Home from "../pages/Home/Home";
import Blogs from "../pages/blogs/Blogs";
import Login from "../pages/login/Login";
import Registration from "../pages/registration/Registration";
import Purchase from "../pages/Purchase/Purchase";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/courses',
                element: <Courses></Courses>
            },
            {
                path: '/courses/:id',
                element: <CourseDetail></CourseDetail>,
                loader: ({params}) => fetch(`https://learning-platform-server-side-beryl.vercel.app/courses/${params.id}`)
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/reg',
                element: <Registration></Registration>
            },
            {
                path: '/buy',
                element: <PrivateRoute><Purchase></Purchase></PrivateRoute>
            }
        ]
    }
])
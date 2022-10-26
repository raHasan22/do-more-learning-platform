import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import CourseDetail from "../pages/CourseDetail/CourseDetail";
import Courses from "../pages/Courses/Courses";
import Home from "../pages/Home/Home";

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
            }
        ]
    }
])
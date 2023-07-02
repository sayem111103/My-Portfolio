import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import About from "../Pages/Home/About/About";
import Project from "../Pages/Home/Project/Project";
import AllSkills from "../Pages/All skills/AllSkills";
import ViewResume from "../Pages/View Resume/ViewResume";
import Error from "../Pages/Error/Error";
import AllProject from "../Pages/All Project/AllProject";
import ContactMe from "../Pages/Contact me/ContactMe";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/allprojects',
                element: <AllProject></AllProject>
            },
            {
                path: '/skills',
                element: <AllSkills></AllSkills>
            },
            {
                path: '/resume',
                element: <ViewResume></ViewResume>
            },
            {
                path:'/contact',
                element:<ContactMe></ContactMe>
            }
        ]
    }
])

export default router;
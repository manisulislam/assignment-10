import Courses from "../../Pages/Courses/Courses";
import CoursesDetails from "../../Pages/Courses/CoursesDetails";
import Side from "../../Pages/Courses/Side";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../../Layout/Main");
const { default: Blog } = require("../../Pages/Blog/Blog");
const { default: Home } = require("../../Pages/Home/Home");
const { default: LogIn } = require("../../Pages/LogIn/LogIn");
const { default: Register } = require("../../Pages/Register/Register");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path:'/courses',
                element:<Courses></Courses>
            },
            {
                path: '/login',
                element: <LogIn></LogIn>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/side/:id',
                element: <Side></Side>,
                loader: ({params})=> fetch(`http://localhost:5000/side/${params.id}`)
            },
            {
                path: '/courses/:id',
                element: <CoursesDetails></CoursesDetails>,
                loader: ({params})=> fetch(`http://localhost:5000/course-details/${params.id}`)
            },
            {
                path: '/checkout/:id',
                
            }
            
        ]
       
    },
    {
        path: '*',
        element: <div>
            <h3>page not found</h3>
        </div>
    }
])
export default router;
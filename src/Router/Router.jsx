import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import AboutUs from "../Pages/Home/AboutUs";
import Service from "../Pages/Home/Service";
import Login from "../Pages/Login/Login";
import SignUp from './../Pages/SingUp/SignUp';
 

const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main> ,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/about',
          element:<AboutUs></AboutUs>
        },
        {
          path:'/service',
          element:<Service></Service>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
           path:'/sing',
           element:<SignUp></SignUp>
        }
      ]
    },
  ]);
  export default router;
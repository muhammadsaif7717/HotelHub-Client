
import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Components/Home/Home";
import About from "../Components/About/About";
import SignIn from "../Components/SignIn/SignIn";
import SignUp from "../Components/SignUp/SignUp";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Rooms from "../Components/Rooms/Rooms";
import MyBookings from "../Components/MyBookings/MyBookings";
import Contact from "../Components/Contact/Contact";
import PrivateRoute from "./PrivateRoute";
import Details from "../Components/Details/Details";
import BookNow from "../Components/BookNow/BookNow";
import PostReview from "../Components/PostReview/PostReview";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/rooms",
                element: <Rooms></Rooms>,
            },
            {
                path: "/details/:id",
                element: <PrivateRoute><Details></Details></PrivateRoute>,
                loader: () => fetch('http://localhost:5000/rooms')
            },
            {
                path: "/book-now/:id",
                element: <PrivateRoute><BookNow></BookNow></PrivateRoute>,
                loader: () => fetch(`http://localhost:5000/rooms`)
            },
            {
                path: "/my-bookings",
                element: <PrivateRoute><MyBookings></MyBookings></PrivateRoute>,
                // loader: () => fetch(`http://localhost:5000/bookings`, {
                //     credentials: 'include'
                // })
            },
            {
                path: "/post-review/:id",
                element: <PrivateRoute><PostReview></PostReview></PrivateRoute>,
                loader: () => fetch(`http://localhost:5000/rooms`)
            },
            {
                path: "/about",
                element: <About></About>,
            },
            {
                path: "/contact",
                element: <Contact></Contact>,
            },
            {
                path: "/sign-in",
                element: <SignIn></SignIn>,
            },
            {
                path: "/sign-up",
                element: <SignUp></SignUp>,
            },
        ]
    },
]);


export default router;
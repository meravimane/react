import React from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./components/Header";
import { Body } from "./components/Body";
import Error from "./components/Error";
import About from "./components/About";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
// import Card from "./components/Card";
import CardClass from "./components/CardClass";

import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";





const AppLayout = () => {
    return <div className="main">
        <Header/>
        <Outlet/>
    </div> 
}

const appRouter =  createBrowserRouter([
    {
        path: "/",
        element:< AppLayout/>,
        children: [
            {
                path: "/",
                element: <Body/>
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/contact",
                element: <Contact/>
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu/>
            },
            {
                path: "/cards",
                element: <CardClass name={"Vishnu"} location={"Delhi"}/>
            }
        ],
        errorElement: <Error/>
    },
    
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);

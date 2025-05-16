import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./Body";
import Contact from "./Contact";
import About from "./About"
import Header from "./Header"
import ErrorComp from "./ErrorComp"
import { createBrowserRouter , RouterProvider , Outlet } from "react-router-dom";

// YoniYoeyea@@@1

const AppLayout = () => {
    return (<div className="app">
        <Header />
        <Outlet/>
    </div>)
}
const router = createBrowserRouter([
    {
        path: '/',
        element:<AppLayout/>,
        children: [
            {
                path: '/',
                element:<Body/>
            },
            {
                path: '/home',
                element:<Body/>
        },{
            path: '/Contact',
            element:<Contact/>
    },{
        path: '/About',
        element:<About/>
}
        ],
        errorElement:<ErrorComp/>
}
])
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router}/>);

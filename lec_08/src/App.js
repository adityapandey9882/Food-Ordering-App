import React, { createElement } from "react";
import ReactDOM  from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom"
// import Grocery from "./components/Grocery";    // we not import it like this 
import React,{ lazy, Suspense } from "react";


// Chunking // Code Splitting // Dynamic Bundling //lazy loading //on demand loading (all are same) 

const Grocery = lazy(() => import("./components/Grocery"));   //it use path of grocery to import    //lazy is a function given to us by react it come with named import
function AppLayout() {
    return (
        <div className="app">
            <Header />
            <Outlet/>
          
        </div>


    );
}

const appRouter = createBrowserRouter([
    {
        path:"/",
        element: <AppLayout/>,
        children: [
            {
                path: "/",
                element: <Body/>
            },
            {
                path: "/about",
                element: <About/>,
            },
            {
                path: "/contact",
                element: <Contact/>,
            },
            {
                path: "/grocery",
                element: (
                    <Suspense fallback={<h1>Loading....</h1>}>
                        <Grocery/>
                    </Suspense>
                ),
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu/>,
            },
        ],
        errorElement: <Error/>,
    },
   
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>)

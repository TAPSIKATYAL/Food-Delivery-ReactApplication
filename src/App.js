import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import Footer from "./components/Footer.js";
import About from "./components/About.js";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Contact from "./components/Contact.js";
import Error from "./components/Error.js";
import RestaurantMenu from "./components/RestaurantMenu.js";
const Applayout = () => {
  return (<div className="app">
    <Header/>
    <Outlet/>
    <Footer/>
  </div>);
};
//We will configure what will happen on specific routes.
//createBrowserRouter takes a list of path. 
//What is path? Path is an object that has path and element. 
const appRouter = createBrowserRouter([
{
 path: "/",
 element: <Applayout/>,
 children:[
  {
    path: "/",
    element: <Body/>
  },
  {
    path: "/about-us",
    element: <About/>,
  },
  {
    path: "/contact-us",
    element: <Contact/>,
  },
  {
    path: "/restaurants/:resId",
    element: <RestaurantMenu/>
  }
 ],
 errorElement: <Error/>,
},
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
import { createBrowserRouter } from "react-router";
import { lazy } from "react";
import Home from "../Pages/Home";
import MainLayout from "../layouts/MainLayout";

const About = lazy(() => import("../Pages/About"));
const Service = lazy(() => import("../Pages/Service"));
const Contact = lazy(() => import('@/Pages/Contact'))


export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/services",
        element: <Service />,
      },
      {
        path: "/contact-us",
        element: <Contact />,
      },
    ],
  },
]);

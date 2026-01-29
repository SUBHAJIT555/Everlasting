import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import Home from "../Pages/Home";
import MainLayout from "../layouts/MainLayout";
import About from "../Pages/About";
import Service from "@/Pages/Service";
import HvacElectrical from "@/components/Services/HvacElectrical";
import PlumbingSanitary from "@/components/Services/PlumbingSanitary";


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
        path: "/services/hvac-electrical",
        element: <HvacElectrical />,
      },
      {
        path: "/services/plumbing-sanitary",
        element: <PlumbingSanitary />,
      },
      {
        path: "/contact-us",
        element: <Contact />,
      },
    ],
  },
]);

import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import Home from "../Pages/Home";
import MainLayout from "../layouts/MainLayout";
const About = lazy(() => import("../Pages/About"));
const Service = lazy(() => import("@/Pages/Service"));
const Contact = lazy(() => import('@/Pages/Contact'))
const TermsAndCondition = lazy(() => import('@/Pages/TermsAndCondition'))
const PrivacyPolicy = lazy(() => import('@/Pages/PrivacyPolicy'))
const CookiePolicy = lazy(() => import('@/Pages/CookiePolicy'))


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
      {
        path: "/terms-and-conditions",
        element: <TermsAndCondition />,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/cookie-policy",
        element: <CookiePolicy />,
      }

    ],
  },
]);

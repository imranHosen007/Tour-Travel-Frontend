import React from "react";
import ReactDOM from "react-dom/client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout.jsx";
import Blogs from "./pages/Blogs.jsx";
import PlaceRoutes from "./pages/PlaceRoutes.jsx";
import About from "./pages/About.jsx";
import NoRoutes from "./pages/Nopage.jsx";
import Home from "./pages/Home.jsx";
import Blogsdetails from "./pages/Blogsdetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/blogs", element: <Blogs /> },
      { path: "/blogs/:id", element: <Blogsdetails /> },
      { path: "/best-places", element: <PlaceRoutes /> },
      { path: "/about", element: <About /> },
      { path: "*", element: <NoRoutes /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

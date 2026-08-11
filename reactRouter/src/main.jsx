/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter,RouterProvider } from "react-router";

import "./index.css";
import App from "./App";

import {About, Contact, User, Github,} from "./components";
import { githubInfoLoader } from "./components/Github/github";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/user/:id",
    element: <User />,
  },
  {
    path: "/github",
    element: <Github />,
    loader: githubInfoLoader,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from "./App";
import User from "./compunets/User";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path:'/users',
    element:<User></User>,
    loader: ()=>fetch('http://localhost:5000/users')
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
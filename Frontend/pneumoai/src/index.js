import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./Reset.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LoginPage from "./components/LogIn/LoginPage.jsx";
import SignupPage from "./components/SignUp/SignupPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/LoginPage",
        element: <LoginPage />,
      },
      {
        path: "/SignupPage",
        element: <SignupPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);




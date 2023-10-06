import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About, { aboutLoader } from "./pages/About.jsx";
import Contact, { contactLoader } from "./pages/Contact.jsx";
import ErrorPage from "./ErrorPage.jsx";
import Person, { personLoader } from "./pages/Person.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
        loader: aboutLoader,
      },
      {
        path: "/contact",
        element: <Contact />,
        loader: contactLoader,
      },
      {
        path: "/person/:id",
        element: <Person />,
        loader: personLoader,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

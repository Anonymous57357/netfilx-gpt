import React, { useEffect } from "react";
import Browse from "./Browse";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";
import Error from "./Error";

const Body = () => {

  const appRouter = createBrowserRouter([
    { path: "/", element: <Login /> },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "*",
      element: <Error />,
    },
  ]);


  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;

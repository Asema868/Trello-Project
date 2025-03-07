import { createBrowserRouter } from "react-router";
import SignIn from "../auth/SignIn";
import SignUp from "../auth/SignUp";
import Header from "../header/Header";
import NotFound from "../pages/404/NotFound";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <SignIn />,
  },

  {
    path: "/signUp",
    element: <SignUp />,
  },
  {
    path: "/header",
    element: <Header />,
  },

  
  {
    path: "*",
    element: <NotFound />,
  },
]);

import { createBrowserRouter } from "react-router-dom";

// pages
import Home from "./pages/home";
import Login, {action as loginAction} from "./pages/login";
import Register from "./pages/register";
import ForgotPassword from "./pages/forgotPassword";
import Booking from "./pages/booking";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    action: loginAction,
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "/booking",
    element: <Booking />,
  },
]);

export default router;
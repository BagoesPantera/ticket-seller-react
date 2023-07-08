import { createBrowserRouter } from "react-router-dom";

// pages
import Home from "./pages/home";
import Login, {action as loginAction} from "./pages/login";
import Register, {action as registerAction} from "./pages/register";
import ForgotPassword, {action as forgotPassAction} from "./pages/forgotPassword";
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
    action: registerAction,
    element: <Register />,
  },
  {
    path: "/forgot-password",
    action: forgotPassAction,
    element: <ForgotPassword />,
  },
  {
    path: "/booking",
    element: <Booking />,
  },
]);

export default router;
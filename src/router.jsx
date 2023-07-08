import { createBrowserRouter } from "react-router-dom";

// pages
import Home from "./pages/home";
import Login, {action as loginAction} from "./pages/login";
import Register, {action as registerAction} from "./pages/register";
import ForgotPassword, {action as forgotPassAction} from "./pages/forgotPassword";
import Booking from "./pages/booking";
import { ProtectedLogin, ProtectedRoute } from "./ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedRoute><Home /></ProtectedRoute>,
  },
  {
    path: "/login",
    action: loginAction,
    element:  <ProtectedLogin><Login /></ProtectedLogin>,
  },
  {
    path: "/register",
    action: registerAction,
    element: <ProtectedLogin><Register /></ProtectedLogin>,
  },
  {
    path: "/forgot-password",
    action: forgotPassAction,
    element: <ProtectedLogin><ForgotPassword /></ProtectedLogin>,
  },
  {
    path: "/booking",
    element: <ProtectedRoute><Booking /></ProtectedRoute>,
  },
]);

export default router;
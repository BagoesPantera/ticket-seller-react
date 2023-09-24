import {Navigate} from "react-router-dom";
import {useContext} from "react";
import {Context} from "./context/authContext.jsx";

export function ProtectedRoute({ children }) {
  const {user} = useContext(Context)
  if (!user){
    return <Navigate to="/login" replace />
  }
  return children
}

export function ProtectedLogin({ children }) {
  const {user} = useContext(Context)
  if (user){
    return <Navigate to="/" replace />
  }
  return children
}
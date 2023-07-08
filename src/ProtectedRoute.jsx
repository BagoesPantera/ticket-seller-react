import { Navigate } from 'react-router-dom'

export function ProtectedRoute({ children }) {
  let isSignedin = localStorage.getItem('signin');

  if (!isSignedin) {
    return <Navigate to="/login" replace />
  }

  return children
}

export function ProtectedLogin({ children }) {
  let isSignedin = localStorage.getItem('signin');

  if (isSignedin) {
    return <Navigate to="/" replace />
  }
  
  return children
}
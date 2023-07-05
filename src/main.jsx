import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './index.css'

// Pages
import Login from './pages/login/index.jsx';
import Register from './pages/register/index.jsx';
import Home from './pages/home/index.jsx';
import ForgotPassword from './pages/forgotPassword/index.jsx';
import Booking from './pages/booking';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <Home />
        } />

        <Route path='/login' element={
          <Login />
        } />

        <Route path="/register" element={
          <Register />
        } />

        <Route path="/forgot-password" element={
          <ForgotPassword />
        } />

        <Route path="/booking" element={
          <Booking />
        } />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)

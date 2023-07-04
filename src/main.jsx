import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import App from './App.jsx'
import './index.css'
import Login from './pages/login/index.jsx';
import Register from './pages/register/index.jsx';
import Home from './pages/home/index.jsx';

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
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)

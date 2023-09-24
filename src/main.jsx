import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom";

import './config/fire.jsx'
import './index.css'
import router from './router';
import {AuthContext} from "./context/authContext.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <AuthContext>
        <RouterProvider router={router} />
      </AuthContext>
  </React.StrictMode>
)

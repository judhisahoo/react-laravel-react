import React, { StrictMode } from 'react'
import ReactDOM,{ createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import Router from './Router.jsx'
import ContextProvider from './Context/ContextProvider'
import { RouterProvider } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
    <RouterProvider router={Router} />
    </ContextProvider>
  </React.StrictMode>
)

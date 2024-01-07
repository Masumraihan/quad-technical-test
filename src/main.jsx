import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import router from './routes/routes.jsx'
import 'react-loading-skeleton/dist/skeleton.css'
import GlobalProvider from './Providers/GlobalProvider.jsx'
import { Toaster } from 'sonner'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalProvider>
      <Toaster position='top-center'/>
      <RouterProvider router={router} />
    </GlobalProvider>
  </React.StrictMode>,
)

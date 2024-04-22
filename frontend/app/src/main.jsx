import React from 'react'
import ReactDOM from 'react-dom/client'
import './reset.css'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './layout/MainLayout.jsx'
import BooksTableComponent from './components/BooksTableComponent.jsx'
import Login from './pages/Login.jsx'
const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/mainlayout',
    element: <MainLayout />,
    children: [
      {
        path: 'books',
        element: <BooksTableComponent />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

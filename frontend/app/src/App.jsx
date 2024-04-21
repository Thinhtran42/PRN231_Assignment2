import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import MainLayout from './layout/MainLayout'
import './reset.css' // Import Normalize.css
import { useState } from 'react'
import Login from './pages/Login'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true)
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/login'
          element={<Login setIsLoggedIn={setIsLoggedIn} />}
        />
        {isLoggedIn ? (
          <Route
            path='/'
            element={<MainLayout />}
          />
        ) : (
          <Route
            path='/*'
            element={
              <Navigate
                to='/login'
                replace
              />
            }
          />
        )}
      </Routes>
    </BrowserRouter>
  )
}

export default App

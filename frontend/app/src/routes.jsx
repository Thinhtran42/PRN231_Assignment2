import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import Login from './pages/Login'
import BooksTableComponent from './components/BooksTableComponent'

const isAuthenticated = false

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route
          path='/login'
          element={<Login />}
        />
        <Route
          path='/mainlayout'
          element={<MainLayout />}
        />
        <Route
          path='/books'
          element={<BooksTableComponent />}
        />
      </Routes>
    </Router>
  )
}

export default AppRoutes

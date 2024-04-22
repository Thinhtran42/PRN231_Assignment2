import { BrowserRouter } from 'react-router-dom'
import './App.css'
import MainLayout from './layout/MainLayout'
import './reset.css' // Import Normalize.css

function App() {
  return (
    <BrowserRouter>
      <MainLayout />
    </BrowserRouter>
  )
}

export default App

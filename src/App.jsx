import { Routes, Route } from 'react-router-dom'
import SidebarLayout from './layouts/SidebarLayout'
import Home from './pages/Home'
import Activity from './pages/activity'
import AuthLayout from './layouts/AuthLayout'
import Login from './pages/LogIn'
import './App.scss'

function App() {

  return (
    <>
      <Routes>
        <Route element={<AuthLayout/>}>
          <Route path="/login" element={<Login/>} />
        </Route>
        <Route element={<SidebarLayout />}>
          <Route path="/" element={<Home/>} />
          <Route path="/activity" element={<Activity/>} />
        </Route>
        <Route path="*" element={<h1>Empthy!</h1>} />
      </Routes>
    </>
  )
}

export default App

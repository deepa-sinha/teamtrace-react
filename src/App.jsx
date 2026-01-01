import { Routes, Route } from 'react-router-dom'
import SidebarLayout from './layouts/SidebarLayout'
import Home from './pages/Home'
import './App.scss'
import Activity from './pages/activity'

function App() {

  return (
    <>
      <Routes>
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

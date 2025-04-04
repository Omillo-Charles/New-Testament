import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Topbar from './Components/Topbar'
import Navbar from './Components/Navbar'
import Home from './Components/Home'

const App = () => {
  return (
    <div className='App'>
      <Topbar />
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
        </Routes>
    </div>
  )
}

export default App

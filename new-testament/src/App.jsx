import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Topbar from './Components/Topbar'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Contact from './Components/Contact'
import About from './Components/About'
import OurChurch from './SubComponets/OurChurch'
import TheChurch from './SubComponets/TheChurch'
import Events from './SubComponets/Events'

const App = () => {
  return (
    <div className='App'>
      <Topbar />
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='/ourchurch' element={<OurChurch />}/>
          <Route path='/thechurch' element={<TheChurch />}/>
          <Route path='/events' element={<Events />}/>
        </Routes>
    </div>
  )
}

export default App

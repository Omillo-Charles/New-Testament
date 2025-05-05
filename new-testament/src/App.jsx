import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import BottomNav from './Components/BottomNav'
import Home from './Components/Home'
import Contact from './Components/Contact'
import About from './Components/About'
import OurChurch from './SubComponets/OurChurch'
import TheChurch from './SubComponets/TheChurch'
import Events from './SubComponets/Events'
import NotFound from './Contents/NotFound'
import './App.css'

const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
}

const App = () => {
  const location = useLocation()

  return (
    <div className='app'>
      <main className='app-content'>
        <AnimatePresence mode='wait'>
          <motion.div
            key={location.pathname}
            initial='initial'
            animate='animate'
            exit='exit'
            variants={pageTransition}
            transition={{ duration: 0.2, ease: 'easeOut' }}
          >
            <Routes location={location}>
              <Route path='/' element={<Home />}/>
              <Route path='/about' element={<About />}/>
              <Route path='/contact' element={<Contact />}/>
              <Route path='/ourchurch' element={<OurChurch />}/>
              <Route path='/thechurch' element={<TheChurch />}/>
              <Route path='/events' element={<Events />}/>
              <Route path='*' element={<NotFound />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>
      <BottomNav />
    </div>
  )
}

export default App

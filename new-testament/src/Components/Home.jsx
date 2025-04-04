import React from 'react'
import Hero from './Hero'
import Menu from './Menu'
import About from './About'
import Contact from './Contact'
import Footer from './Footer'

const Home = () => {
  return (
    <div className='home'>
        <Hero />
        <Menu />
        <About />
        <Contact />
        <Footer />
    </div>
  )
}

export default Home

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './Navbar'
import Footer from './Footer'
import Herosection from './Herosection'


function App() {
  return (
    <div>
      <Navbar/>
      <Herosection/>
      <Footer/>
     
    </div>
  )
}

export default App

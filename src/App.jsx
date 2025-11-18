import React, { useState } from 'react'
import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Pilars from './Pilars'
import Connect from './Connect'
import Test from './Test'
import Footer from './Footer'

export default function App() {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      <Home isOpen={isOpen} setIsOpen={setIsOpen} />
      <About isOpen={isOpen} setIsOpen={setIsOpen} />
      <Pilars isOpen={isOpen} setIsOpen={setIsOpen} />
      <Connect isOpen={isOpen} setIsOpen={setIsOpen} />
      <Test isOpen={isOpen} setIsOpen={setIsOpen} />
      <Footer isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  )
}

import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Learnhub from './pages/Learnhub'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Singup from './pages/Singup';


export default function App() {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <BrowserRouter>
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      
      <Routes>
        <Route path="/" element={<Home isOpen={isOpen} setIsOpen={setIsOpen} />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/learnhub" element={<Learnhub />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Singup />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

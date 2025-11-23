import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Mentor'
import Learnhub from './pages/Learnhub'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Singup from './pages/Singup';
import Communities from './pages/Communities';
import Buddy from './pages/Buddy';
import CDPhub from './pages/CDPhub';
import Mentor from './pages/Mentor';


export default function App() {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <BrowserRouter>
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      
      <Routes>
        <Route path="/" element={<Home isOpen={isOpen} setIsOpen={setIsOpen} />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/mentor" element={<Mentor />} />
        <Route path="/communities" element={<Communities />} />
        <Route path="/buddy" element={<Buddy />} />
        <Route path="/CDPhub" element={<CDPhub />} />
        <Route path="/learnhub" element={<Learnhub />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Singup />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

import React, { useState } from 'react'

export default function Navbar({ isOpen, setIsOpen }) {
  return (
    <div>
        <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between w-full px-10 py-1 shadow-md lg:px-10 sm:px-5 md:px-2 bg-gray-50/80 backdrop-blur-md">
            <img src="./images/Logo.png" alt="" className="w-16 h-16 cursor-pointer md:w-16 md:h-16 sm:w-12 sm:h-12" />

            <nav className={`flex gap-8 lg:gap-8 z-50 overflow-hidden sm:gap-3 transition-all duration-300 sm:flex-col sm:h-svh sm:w-4/5 sm:top-14 sm:bg-gray-50 sm:right-0 sm:shadow-xl sm:px-5 sm:absolute sm:py-0 sm:opacity-0  md:mt-0 md:bg-transparent md:translate-x-0 md:shadow-none md:opacity-100 md:px-0 md:py-0 md:flex-row md:h-fit md:w-fit md:static
              +
              ${isOpen ? 'sm:opacity-100 sm:h-svh md:h-0 transition-all sm:py-8 duration-300':'md:h-fit sm:h-0 sm:opacity-0 sm:py-0'}`}>
                <p className="text-sm font-semibold transition-colors duration-200 cursor-pointer sm:text-2xl md:text-sm text-emerald-700 font-1 hover:text-emerald-900/55">Home</p>
                <p className="text-sm font-semibold transition-colors duration-200 cursor-pointer sm:text-2xl md:text-sm text-emerald-700 font-1 hover:text-emerald-900/55">About</p>
                <p className="text-sm font-semibold transition-colors duration-200 cursor-pointer sm:text-2xl md:text-sm text-emerald-700 font-1 hover:text-emerald-900/55">Contact</p>
                <p className="text-sm font-semibold transition-colors duration-200 cursor-pointer sm:text-2xl md:text-sm text-emerald-700 font-1 hover:text-emerald-900/55">Learn Hub</p>
                <p className="text-sm font-semibold transition-colors duration-200 cursor-pointer sm:text-2xl md:text-sm text-emerald-700 font-1 hover:text-emerald-900/55">GMS Connect</p>
                <p className="text-sm font-semibold transition-colors duration-200 cursor-pointer sm:text-2xl md:text-sm text-emerald-700 font-1 hover:text-emerald-900/55">Communities</p>
                <button className="items-center justify-center h-12 mt-5 font-mono text-lg transition-colors duration-200 rounded-sm w-52 ring-1 text-emerald-700 ring-emerald-700 hover:bg-emerald-700 hover:text-gray-50 sm:hidden">Join Waitlist</button>
                

            </nav>

            <button className="px-2 py-1 font-mono text-lg transition-colors duration-200 rounded-sm sm:hidden md:flex ring-1 text-emerald-700 ring-emerald-700 hover:bg-emerald-700 hover:text-gray-50">Join Waitlist</button>
            {!isOpen ? 
        <svg xmlns="http://www.w3.org/2000/svg" onClick={() => setIsOpen(!isOpen)} className="cursor-pointer fill-emerald-700 size-6 sm:size-6 md:hidden sm:flexs" viewBox="0 0 640 640"><path d="M96 160C96 142.3 110.3 128 128 128L512 128C529.7 128 544 142.3 544 160C544 177.7 529.7 192 512 192L128 192C110.3 192 96 177.7 96 160zM96 320C96 302.3 110.3 288 128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 96 337.7 96 320zM544 480C544 497.7 529.7 512 512 512L128 512C110.3 512 96 497.7 96 480C96 462.3 110.3 448 128 448L512 448C529.7 448 544 462.3 544 480z"/></svg>
       : <svg xmlns="http://www.w3.org/2000/svg" onClick={() => setIsOpen(!isOpen)} className="cursor-pointer fill-emerald-700 size-6 sm:size-6 md:hidden sm:flexs" viewBox="0 0 640 640"><path d="M528 128C540.2 115.8 540.2 96.2 528 84C515.8 71.8 496.2 71.8 484 84L320 248L156 84C143.8 71.8 124.2 71.8 112 84C99.8 96.2 99.8 115.8 112 128L276 292L112 456C99.8 468.2 99.8 487.8 112 500C124.2 512.2 143.8 512.2 156 500L320 336L484 500C496.2 512.2 515.8 512.2 528 500C540.2 487.8 540.2 468.2 528 456L364 292L528 128Z"/></svg>}
        </header>
    </div>
  )
}

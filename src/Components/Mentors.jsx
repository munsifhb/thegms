import React from 'react'
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Mentors({ isOpen, setIsOpen }) {
     
    useEffect(() => {
                AOS.init({
                  duration: 800, // animation duration in ms
                  offset: 100,   // distance before element comes into view
                  easing: "ease-in-out",
                });
              }, []);

  return (
    <div onClick={() => isOpen ? setIsOpen(false) : null}>

        <section className="px-2 py-24 mt-2 overflow-hidden bg-gray-50">
            <h1 className="text-5xl font-semibold text-center md:text-5xl sm:text-4xl font-1 text-emerald-700">Meet Our Mentors</h1>

            <div className="relative flex items-center mt-10 overflow-hidden lg:flex-row sm:flex-col lg:gap-10 sm:gap-5">
                <div data-aos='fade-up' className="w-2/4 p-5 sm:w-full lg:w-2/4 rounded-xl bg-emerald-700/5">
                <h1 className="font-semibold tracking-tighter capitalize text-7xl md:text-6xl lg:text-7xl sm:text-5xl font-1 text-start text-emerald-700">Let Your Journey, Guided by Experts</h1>
            <p className="mx-auto mt-6 font-mono text-lg md:text-lg sm:text-sm text-start md:text-start sm:text-wrap text-emerald-700 text-balance">
                Join our community of mentors and mentees. Learn from experienced professionals or share your knowledge to guide others — the choice is yours!
            </p>

            <div className="flex gap-6 mt-4">
                        <button className="px-5 py-2 transition-all rounded-sm bg-emerald-700 text-gray-50 active:scale-105">Become a Mentor</button>
                        <button className="px-5 py-2 transition-all bg-white rounded-sm ring-1 ring-emerald-700 text-emerald-700 active:scale-105">Become a Mentee</button>
                    
                    </div>
                </div>
                

                <div  className="absolute w-2/4 mt-10 -rotate-45 bg-emerald-700 h-80 -right-28 lg:-right-28 sm:-right-96"></div>
            </div>
        </section>

    </div>
  )
}

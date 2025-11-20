import React from 'react'
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import About from '../Components/About';
import Pilars from '../Components/Pilars';
import Connect from '../Components/Connect';
import Test from '../Components/Test';
import Footer from '../Components/Footer';



export default function Home({ isOpen, setIsOpen }) {
    useEffect(() => {
    AOS.init({
      duration: 800, // animation duration in ms
        offset: 100,   // distance before element comes into view
        easing: "ease-in-out",
    });
  }, []);
    const myStyle = {
    backgroundImage: "url('./images/hero-bg-1.jpeg')",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat"
  }
  return (
    <div onClick={() => isOpen ? setIsOpen(false) : null}>
        <section className="overflow-hidden bg-gray-50" style={myStyle}>
            {/* <img src="./images/hero-bg-2.png" alt="Hero-bg" className="w-full" /> */}

            <div className="flex items-center justify-start pt-32 pb-24 sm:pt-32 md:pt-40 md:pb-24 sm:pb-32 md:flex-row sm:flex-col bg-gradient-to-b from-white/0 via-emerald-700/50 to-gray-50">
                
                <div data-aos='fade-out' className="flex flex-col w-2/5 gap-2 px-14 sm:px-5 md:px-14 sm:w-full md:w-3/4 lg:w-2/4">
                    <h1 className="font-semibold text-7xl font-1 md:text-7xl sm:text-5xl text-gray-50">Learn. Act. Reflect. Grow.</h1>
                    <p className="font-mono text-xl md:text-lg sm:text-sm text-gray-50 text-balance ">
                        Join a community of people committed to sustainable living, climate action, and mental wellbeing. Together, we learn, take action, and grow into healthier versions of ourselves—while building a healthier planet.
                    </p>
                    <div className="flex gap-6 mt-4">
                        <button className="px-5 py-2 rounded-sm bg-emerald-700 text-gray-50">Join Waitlist</button>
                        <button className="px-5 rounded-sm py-2 bg-white ring-1 ring-emerald-700 text-emerald-700">Learn More</button>
                    
                    </div>
                    
                </div>




                {/* <div className="w-2/5 my-auto sm:w-full md:w-2/5 lg:w-2/5">
                    
                    <div className="mx-auto rotate-45 md:mt-0 sm:mt-16 rounded-xl -mt-18 w-80 h-80 sm:w-64 sm:h-64 lg:w-80 lg:h-80 bg-gradient-to-tr from-emerald-700/5 to-emerald-700/55">
                        <img src="./images/hero-1.png" alt="" className="w-56 mx-auto -rotate-45 lg:w-56 sm:w-48" />
                    </div>
                    
                    
                </div> */}
            </div>
        </section>
      
      <About isOpen={isOpen} setIsOpen={setIsOpen} />
      <Pilars isOpen={isOpen} setIsOpen={setIsOpen} />
      <Connect isOpen={isOpen} setIsOpen={setIsOpen} />
      <Test isOpen={isOpen} setIsOpen={setIsOpen} />
      <Footer isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  )
}

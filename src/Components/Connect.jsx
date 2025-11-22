import React from 'react'
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Connect( { isOpen, setIsOpen } ) {
        useEffect(() => {
            AOS.init({
              duration: 800, // animation duration in ms
              offset: 100,   // distance before element comes into view
              easing: "ease-in-out",
            });
          }, []);

    const myStyle = {
    backgroundImage: "url('./images/plant-4.jpeg')",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat"
  }

   const mainStyle = {
    backgroundImage: "url('./images/pic-3.jpg')",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat"
  }
  return (
    <div onClick={() => isOpen ? setIsOpen(false) : null}>
        <section style={mainStyle} className="overflow-hidden">

        <div className="w-full px-10 py-20 md:px-10 sm:px-5 lg:px-10 backdrop-blur-sm bg-emerald-700/55">
            <div data-aos='fade-up' className=" rounded-2xl">
                <h1 className="text-5xl font-semibold text-center md:text-5xl sm:text-4xl font-1 text-gray-50">Buddy System</h1>
            </div>

            <div className="flex items-center justify-center mt-10 lg:flex-row sm:flex-col lg:gap-10 sm:gap-5">

            <div data-aos='fade-right' className="w-2/4 py-12 md:w-full h-fit lg:w-2/5 sm:w-full rounded-xl sm:py-8 lg:py-12">
            <h1 className="text-4xl font-semibold text-start md:text-6xl sm:text-5xl font-1 text-gray-50">The Buddy system is the FIRST engagement layer.</h1>
            </div>

            
                <div data-aos='fade-left' className="w-2/4 px-10 py-12 bg-emerald-700 md:px-5 md:py-8 sm:px-3 sm:py-5 rounded-xl lg:w-3/5 md:w-full sm:w-full">
                        <p className="mx-auto mt-6 font-mono text-2xl text-start md:text-2xl sm:text-sm text-gray-50 text-balance">
                        <span className='font-bold text-white'>Purpose:</span> Pair two users to complete foundational tasks together.
                    </p>
                    
                    <h1 className="mt-5 text-4xl font-semibold text-start md:text-3xl sm:text-2xl font-1 text-gray-50">Key Features</h1>

                    <div className="mt-6">
                        <ul className="px-6 font-mono text-lg md:text-sm sm:text-xs text-gray-50 text-balance">
                            <li className="mt-2">● Buddy matching (age, interests, pillars)</li>
                            <li className="mt-2">● Shared task list</li>
                            <li className="mt-2">● Progress tracker</li>
                            <li className="mt-2">● Reflection prompts</li>
                        </ul>
                    </div>

                    
                
            </div>

            </div>




            </div>
            
        </section>
    </div>
  )
}

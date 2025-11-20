import React from 'react'
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Test( { isOpen, setIsOpen } ) {
    useEffect(() => {
    AOS.init({
      duration: 800, // animation duration in ms
        offset: 100,   // distance before element comes into view
        easing: "ease-in-out",
    });
    }, []);

    const myStyle = {
    backgroundImage: "url('./images/plant-3.jpg')",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat"
  }
  return (
    <div onClick={() => isOpen ? setIsOpen(false) : null}>
        <section style={myStyle} className="overflow-hidden">
            <div className="flex sm:items-center md:justify-start sm:justify-center px-5 sm:px-2 md:px-5 py-20 bg-gradient-to-r from-emerald-700/55 via-emerald-700/40 to-gray-50/0 lg:flex-row sm:flex-col lg:gap-0 md:gap-10 sm:gap-10">
                <div data-aos='fade-right' className="w-2/4 p-5 sm:p-2 md:p-5 md:w-2/4 sm:w-full">
                <h1 className="font-semibold tracking-tighter capitalize text-7xl md:text-5xl lg:text-7xl sm:text-4xl font-1 text-start text-gray-50">
                    Join Our Newslater...
                </h1>
                <p className="mx-auto mt-6 font-mono text-lg md:text-lg sm:text-sm text-start md:text-start sm:text-wrap text-gray-50 text-balance">
                    Be part of a growing community that cares for the planet and cares for people.
                    Start your journey toward a more mindful, sustainable, and impactful life.

                </p>

                <form action="" className="flex w-full bg-emerald-700 p-2 sm:p-1 md:p-2 mt-5 rounded-md gap-4">
                        <input type="text" placeholder="Email" className="w-full text-gray-50 px-4 py-2 text-lg rounded-md focus:outline-none bg-transparent"/>
                        <button type="submit" className="px-4 py-2 sm:px-2 md:px-4 sm:py-1 md:py-2 sm:text-xs md:text-lg font-mono text-lg transition-colors duration-200 rounded-md bg-gray-50 text-emerald-700 hover:bg-emerald-800">Subscribe</button>
                    </form>
                </div>

                
                    
                

            </div>
        </section>
    </div>
  )
}

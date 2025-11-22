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
            <div className="flex px-5 py-20 sm:items-center md:justify-start sm:justify-center sm:px-2 md:px-5 bg-gradient-to-r from-emerald-700/55 via-emerald-700/40 to-gray-50/0 lg:flex-row sm:flex-col lg:gap-0 md:gap-10 sm:gap-10">
                <div data-aos='fade-right' className="w-2/4 p-5 sm:p-2 md:p-5 md:w-2/4 sm:w-full">
                <h1 className="font-semibold tracking-tighter capitalize text-7xl md:text-5xl lg:text-7xl sm:text-4xl font-1 text-start text-gray-50">
                    Subscribe To Our Newslater...
                </h1>
                <p className="mx-auto mt-6 font-mono text-lg md:text-lg sm:text-sm text-start md:text-start sm:text-wrap text-gray-50 text-balance">
                    Be part of a growing community that cares for the planet and cares for people.
                    Start your journey toward a more mindful, sustainable, and impactful life.

                </p>

                <form action="" className="flex w-full gap-4 p-2 mt-5 rounded-md bg-emerald-700 sm:p-1 md:p-2">
                        <input type="text" placeholder="Email" className="w-full px-4 py-2 text-lg bg-transparent rounded-md text-gray-50 focus:outline-none"/>
                        <button type="submit" className="px-4 py-2 font-mono text-lg transition-colors duration-200 rounded-md sm:px-2 md:px-4 sm:py-1 md:py-2 sm:text-xs md:text-lg bg-gray-50 text-emerald-700 hover:bg-emerald-800">Subscribe</button>
                    </form>
                </div>

                
                    
                

            </div>
        </section>
    </div>
  )
}

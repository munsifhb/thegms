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
            <div className="flex items-center justify-center px-5 py-20 bg-gradient-to-r from-emerald-700/55 via-emerald-700/40 to-gray-50/0 lg:flex-row sm:flex-col lg:gap-0 md:gap-10 sm:gap-10">
                <div data-aos='fade-right' className="w-2/4 p-5 md:w-2/4 sm:w-full">
                <h1 className="font-semibold tracking-tighter capitalize text-7xl md:text-5xl lg:text-7xl sm:text-4xl font-1 text-start text-gray-50">
                    Join the Waitlist..
                </h1>
                <p className="mx-auto mt-6 font-mono text-lg md:text-lg sm:text-sm text-start md:text-start sm:text-wrap text-gray-50 text-balance">
                    Be part of a growing community that cares for the planet and cares for people.
                    Start your journey toward a more mindful, sustainable, and impactful life.

                </p>
                </div>

                <div data-aos='fade-left' className="w-2/4 p-5 md:w-2/4 sm:w-full">
                    <form action="" className="flex flex-col gap-4">
                        <input type="text" placeholder="Full Name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-700"/>
                        <input type="email" placeholder="Email Address" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-700"/>
                        <button type="submit" className="px-4 py-2 font-mono text-lg transition-colors duration-200 rounded-md text-gray-50 bg-emerald-700 hover:bg-emerald-800">Join Waitlist</button>
                    </form>
                </div>

            </div>
        </section>
    </div>
  )
}

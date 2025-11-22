import React from 'react'
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function About( { isOpen, setIsOpen } ) {
    useEffect(() => {
    AOS.init({
      duration: 800, // animation duration in ms
      offset: 100,   // distance before element comes into view
      easing: "ease-in-out",
    });
  }, []);
  return (
    <div onClick={() => isOpen ? setIsOpen(false) : null}>
        <section className="py-20 bg-gray-50">
            <h1 className="text-5xl font-semibold text-center md:text-5xl sm:text-4xl font-1 text-emerald-700">Who We Are</h1>
            <div data-aos='fade-right' className="flex items-center justify-center px-10 mt-10 md:flex-row sm:flex-col ">
                <div className="w-2/4 mt-10 md:w-2/4 sm:w-full">
            <h1 className="font-semibold tracking-tighter capitalize text-7xl md:text-6xl lg:text-7xl sm:text-5xl font-1 text-start text-emerald-700">About the green minds space.</h1>
            <p className="mx-auto mt-6 font-mono text-lg md:text-lg sm:text-sm text-start md:text-start sm:text-wrap text-emerald-700 text-balance">
                The Green Minds Space is a youth-led, community-driven initiative promoting sustainable lifestyles, practical climate action, and accessible mental wellbeing practices. We blend education, creativity, and community support to empower individuals to take small yet powerful steps that improve both their inner lives and the world around them.
            </p>
            <p className="text-sm italic font-thin mt-14 text-emerald-500">Healthy minds. Healthy planet. One community.</p>
            </div>


            <div className="w-2/4 md:w-2/4 sm:w-full">
                <div data-aos='zoom-in' className="w-4/5 mx-auto mt-10 overflow-hidden shadow-lg group rounded-xl md:w-4/5 sm:w-full">
                    <img src="./images/pic-2.jpg" alt="Plant" className="w-full transition-all duration-200 delay-150 h-96 group-hover:scale-110" />
                </div>
            </div>
            </div>
        </section>
    </div>
  )
}

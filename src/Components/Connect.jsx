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
    backgroundImage: "url('./images/hero-1.jpg')",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat"
  }
  return (
    <div onClick={() => isOpen ? setIsOpen(false) : null}>
        <section style={mainStyle} className="overflow-hidden">

        <div className="w-full px-10 py-20 bg-gray-50/75 md:px-10 sm:px-5 lg:px-10">
            <div data-aos='fade-up' className="py-20 bg-gradient-to-r from-emerald-700/50 via-emerald-700/40 to-emerald-700/30 rounded-2xl backdrop-blur-md">
                <h1 className="text-5xl font-semibold text-center md:text-5xl sm:text-4xl font-1 text-gray-50">Get Started with GMS Connect</h1>
            </div>

            <div className="flex items-center justify-center mt-20 lg:flex-row sm:flex-col lg:gap-10 sm:gap-5">

            <div data-aos='fade-right' className="w-2/5 py-12 md:w-full h-fit lg:w-2/5 sm:w-full rounded-xl backdrop-blur-md sm:py-8 lg:py-12 bg-gray-50/65">
            <img src="./images/phone-mockup.png" alt="" className="w-64 mx-auto h-96" />
            </div>

            
                <div data-aos='fade-left' className="w-3/5 px-10 py-12 md:px-10 md:py-12 sm:px-3 sm:py-5 bg-gray-50/65 backdrop-blur-md rounded-xl lg:w-3/5 md:w-full sm:w-full">
                    <h1 className="text-4xl font-semibold text-center md:text-7xl sm:text-5xl font-1 text-emerald-700">Join GMS Connect Today!</h1>
                    <p className="mx-auto mt-6 font-mono text-lg text-center md:text-sm sm:text-xs text-emerald-700 text-balance">
                        GMS Connect is our flagship mobile app designed to support you on your journey toward sustainable living and mental wellbeing. It connects you to a supportive community of change-makers, offers guided actions, and provides daily habits and reflections that help you grow at your own pace.
                    </p>
                    
                    <h1 className="mt-5 text-4xl font-semibold text-start md:text-4xl sm:text-3xl font-1 text-emerald-700">Key Features</h1>

                    <div className="mt-6">
                        <ul className="px-6 font-mono text-lg md:text-sm sm:text-xs text-emerald-700 text-balance">
                            <li className="mt-2">●	Join communities and interest groups</li>
                            <li className="mt-2">●	Take eco-friendly actions and track your progress</li>
                            <li className="mt-2">●	Access sustainable living guides and challenges</li>
                            <li className="mt-2">●	Practice mental wellbeing with daily reflections</li>
                            <li className="mt-2">●	Connect with people who share your values</li>
                        </ul>
                    </div>

                    <div className="flex justify-center mt-6">
                        <button className="px-4 py-2 bg-emerald-700 text-gray-50">Join GMS Connect</button>
                    </div>
                
            </div>

            </div>




            </div>
            
        </section>
    </div>
  )
}

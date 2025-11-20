import React from 'react'
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Pilars( { isOpen, setIsOpen } ) {
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
  return (
    <div onClick={() => isOpen ? setIsOpen(false) : null}>
        <section className="px-2 py-24 mt-2 bg-gray-50">

            <h1 className="text-5xl font-semibold text-center md:text-5xl sm:text-4xl font-1 text-emerald-700">Our Pillars</h1>

            <div className="grid w-4/5 grid-cols-3 mx-auto sm:w-full lg:w-4/5 md:grid-cols-3 sm:grid-cols-1">
            
                <div data-aos='fade-right' className="flex flex-col items-center justify-center p-10 mt-10 text-center border-l-4 md:border-none border-emerald-700 lg:p-10 sm:p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className='mx-auto size-12 fill-green-500' viewBox="0 0 640 640"><path d="M535.3 70.7C541.7 64.6 551 62.4 559.6 65.2C569.4 68.5 576 77.7 576 88L576 274.9C576 406.1 467.9 512 337.2 512C260.2 512 193.8 462.5 169.7 393.3C134.3 424.1 112 469.4 112 520C112 533.3 101.3 544 88 544C74.7 544 64 533.3 64 520C64 445.1 102.2 379.1 160.1 340.3C195.4 316.7 237.5 304 280 304L360 304C373.3 304 384 293.3 384 280C384 266.7 373.3 256 360 256L280 256C240.3 256 202.7 264.8 169 280.5C192.3 210.5 258.2 160 336 160C402.4 160 451.8 137.9 484.7 116C503.9 103.2 520.2 87.9 535.4 70.7z"/></svg>
                    <h2 className="mt-6 text-2xl font-semibold font-1 text-emerald-700">Climate Action</h2>
                    <p className="mt-4 font-mono text-xs text-emerald-700 text-balance">
                        We inspire and support practical, everyday actions—from cleanups to recycling habits—that reduce environmental footprint and build climate-smart communities.
                    </p>
                </div>
                <div data-aos='fade-right' className="flex flex-col items-center justify-center p-10 mt-10 text-center border-l-4 md:border-none border-emerald-700 lg:p-10 sm:p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className='mx-auto size-12 fill-green-500' viewBox="0 0 640 640"><path d="M408 32C474.3 32 528 85.7 528 152L528 158.2C557.3 170.4 576 199.5 576 235.1C576 263 550.7 309.9 510 346.8C506.2 350.3 501.2 352.1 496 352.1C490.8 352.1 485.8 350.3 482 346.8C441.3 310 416 263.1 416 235.1C416 199.5 434.7 170.4 464 158.2L464 152C464 121.1 438.9 96 408 96C377.1 96 352 121.1 352 152L352 576C352 593.7 337.7 608 320 608C302.3 608 288 593.7 288 576L288 280C288 249.1 262.9 224 232 224C201.1 224 176 249.1 176 280L176 318.2C205.3 330.4 224 359.5 224 395.1C224 423 198.7 469.9 158 506.8C154.2 510.3 149.2 512.1 144 512.1C138.8 512.1 133.8 510.3 130 506.8C89.3 469.9 64 423 64 395.1C64 359.4 82.7 330.4 112 318.2L112 280C112 213.7 165.7 160 232 160C252.2 160 271.3 165 288 173.8L288 152C288 85.7 341.7 32 408 32z"/></svg>
                    <h2 className="mt-6 text-2xl font-semibold font-1 text-emerald-700">Sustainable Living</h2>
                    <p className="mt-4 font-mono text-xs text-emerald-700 text-balance">
                        We simplify eco-friendly living with easy guides and habits anyone can adopt in daily life.
                    </p>
                </div>
                <div data-aos='fade-right' className="flex flex-col items-center justify-center p-10 mt-10 text-center border-l-4 md:border-none border-emerald-700 lg:p-10 sm:p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className='mx-auto size-12 fill-green-500' viewBox="0 0 640 640"><path d="M305 151.1L320 171.8L335 151.1C360 116.5 400.2 96 442.9 96C516.4 96 576 155.6 576 229.1L576 231.7C576 343.9 436.1 474.2 363.1 529.9C350.7 539.3 335.5 544 320 544C304.5 544 289.2 539.4 276.9 529.9C203.9 474.2 64 343.9 64 231.7L64 229.1C64 155.6 123.6 96 197.1 96C239.8 96 280 116.5 305 151.1z"/></svg>
                    <h2 className="mt-6 text-2xl font-semibold font-1 text-emerald-700">Mental Wellbeing
</h2>
                    <p className="mt-4 font-mono text-xs text-emerald-700 text-balance">
                        We promote emotional resilience through reflections, community support, and wellbeing practices that help you thrive.
                    </p>
                </div>

            </div>

        </section>

        
        <section className="px-2 py-24 overflow-hidden bg-gray-50">

           <h1 className="text-5xl font-semibold text-center md:text-5xl sm:text-4xl font-1 text-emerald-700">Benefits</h1>
              
              <div className="flex items-center justify-center mt-32 lg:flex-row sm:flex-col lg:gap-0 md:gap-10 sm:gap-10">
                <div data-aos='fade-right' style={myStyle} className="w-2/4 radius-1 lg:w-2/4 sm:w-full">
                <div className="relative w-full h-full px-8 pt-32 pb-32 bg-gradient-to-b radius-1 from-emerald-700/55 via-emerald-700/40 to-gray-50/0">
                <h1 className="text-6xl font-semibold tracking-tighter capitalize md:text-7xl lg:text-7xl sm:text-5xl font-1 text-start text-gray-50">
                    Why Choose The Green Minds Space?
                </h1>

                <div data-aos='zoom-in' className="absolute flex-col gap-2 p-2 bg-white rounded-md shadow-md -top-8 h-fit w-fit">
                    <div className="">
                        <div className="flex items-center w-full gap-1 rounded-md">
                            <svg xmlns="http://www.w3.org/2000/svg" className='size-8 fill-green-500' viewBox="0 0 640 640"><path d="M535.3 70.7C541.7 64.6 551 62.4 559.6 65.2C569.4 68.5 576 77.7 576 88L576 274.9C576 406.1 467.9 512 337.2 512C260.2 512 193.8 462.5 169.7 393.3C134.3 424.1 112 469.4 112 520C112 533.3 101.3 544 88 544C74.7 544 64 533.3 64 520C64 445.1 102.2 379.1 160.1 340.3C195.4 316.7 237.5 304 280 304L360 304C373.3 304 384 293.3 384 280C384 266.7 373.3 256 360 256L280 256C240.3 256 202.7 264.8 169 280.5C192.3 210.5 258.2 160 336 160C402.4 160 451.8 137.9 484.7 116C503.9 103.2 520.2 87.9 535.4 70.7z"/></svg>
                            <h1 className="text-2xl text-black">100%</h1>
                        </div>
                        <p className="px-4 mt-1 font-mono text-sm text-emerald-700 text-balance">
                            Climate Action
                        </p>
                    </div>
                    </div>


                    <div data-aos='zoom-in' className="absolute flex-col gap-2 p-2 bg-white rounded-md shadow-md -bottom-8 right-10 h-fit w-fit">
                    <div className="">
                        <div className="flex items-center w-full gap-1 rounded-md">
                            <svg xmlns="http://www.w3.org/2000/svg" className='mx-auto size-8 fill-green-500' viewBox="0 0 640 640"><path d="M408 32C474.3 32 528 85.7 528 152L528 158.2C557.3 170.4 576 199.5 576 235.1C576 263 550.7 309.9 510 346.8C506.2 350.3 501.2 352.1 496 352.1C490.8 352.1 485.8 350.3 482 346.8C441.3 310 416 263.1 416 235.1C416 199.5 434.7 170.4 464 158.2L464 152C464 121.1 438.9 96 408 96C377.1 96 352 121.1 352 152L352 576C352 593.7 337.7 608 320 608C302.3 608 288 593.7 288 576L288 280C288 249.1 262.9 224 232 224C201.1 224 176 249.1 176 280L176 318.2C205.3 330.4 224 359.5 224 395.1C224 423 198.7 469.9 158 506.8C154.2 510.3 149.2 512.1 144 512.1C138.8 512.1 133.8 510.3 130 506.8C89.3 469.9 64 423 64 395.1C64 359.4 82.7 330.4 112 318.2L112 280C112 213.7 165.7 160 232 160C252.2 160 271.3 165 288 173.8L288 152C288 85.7 341.7 32 408 32z"/></svg>
                            <h1 className="text-2xl text-black">1250+</h1>
                        </div>
                        <p className="px-4 mt-1 font-mono text-sm text-emerald-700 text-balance">
                            Total Plants
                        </p>
                    </div>
                    </div>
                
                    
                </div>
                </div>
                

                <div className="grid w-2/4 grid-cols-2 lg:w-2/4 sm:w-full sm:grid-cols-1 md:grid-cols-2">
                    <div data-aos='fade-left' className="flex flex-col items-start justify-center p-2 text-left lg:p-10 sm:p-2">
                        <h2 className="mt-6 text-xl font-semibold font-1 text-emerald-700">● Inclusive and Supportive Community</h2>
                        <p className="px-8 mt-4 font-mono text-xs border-l-4 text-emerald-700 text-balance border-emerald-700">
                            We welcome people of all ages, backgrounds, and experiences who want to learn, grow, and make a difference.
                        </p>
                    </div>
                    <div data-aos='fade-left' className="flex flex-col items-start justify-center p-2 text-left lg:p-10 sm:p-2">
                        <h2 className="mt-6 text-xl font-semibold font-1 text-emerald-700">● Simple, Practical Guides</h2>
                        <p className="px-8 mt-4 font-mono text-xs border-l-4 text-emerald-700 text-balance border-emerald-700">
                            Sustainability and wellness don’t have to be complicated. We break things down in ways everyone can understand.
                        </p>
                    </div>
                    <div data-aos='fade-left' className="flex flex-col items-start justify-center p-2 text-left lg:p-10 sm:p-2">
                        <h2 className="mt-6 text-xl font-semibold font-1 text-emerald-700">● Real Impact You Can See</h2>
                        <p className="px-8 mt-4 font-mono text-xs border-l-4 text-emerald-700 text-balance border-emerald-700">
                            From local climate actions to wellbeing check-ins, our community turns learning into real results.
                        </p>
                    </div>
                    <div data-aos='fade-left' className="flex flex-col items-start justify-center p-2 text-left lg:p-10 sm:p-2">
                        <h2 className="mt-6 text-xl font-semibold font-1 text-emerald-700">● Holistic Approach</h2>
                        <p className="px-8 mt-4 font-mono text-xs border-l-4 text-emerald-700 text-balance border-emerald-700">
                            We don’t separate people from the planet—your wellbeing is connected to the wellbeing of the environment.
                        </p>
                    </div>
                </div>
              </div>

        </section>

    </div>
  )
}

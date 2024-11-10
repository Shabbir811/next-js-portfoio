"use client"
import Image from "next/image"
import { TypeAnimation } from 'react-type-animation';


function HeroSection() {
  return (
    <section>
      <div className='gird gird-cols-1 sm: grid-cols-12 '>
        <div className='col-span-7 place-self-center text-center sm:text-left'>
            <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                    Hello, I'm{" "}
                 </span> 
                 <br />
                 <TypeAnimation
                    sequence={[
                        'Ghulam Shabbir',
                    1000, 
                        'Web developer',
                    1000,
                        'Ux/Ui designer',
                    1000,
                        'with Typescript , Tailwind , Next.js',
                    1000
                ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    /> 
            </h1>
            <p className='text-[#ADB7BE] text-base  sm:text-lg lg:text-xl mb-6  '>
            Web designing is the process of planning,
            conceptualizing,and implementing the plan for
            designing a website in a way that is functional
            and offers a good user experience.
            </p>
            <div>
                <button className="px-6 py-3 w-full sm:w-fit  rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white ">
                    Hire Me
                </button>
                <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white  mt-3">
                    <span className=" block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">Download CV</span>
                </button>
            </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
            <div className="rounded-full bg-[#181818] w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] relative ">
                <Image
                src="/images/hero-img.png"
                alt="hero-image"
                className="absolute flex transform translate-x-[52px] -translate-y-2"
                width={200}
                height={200}
                />  
            </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection

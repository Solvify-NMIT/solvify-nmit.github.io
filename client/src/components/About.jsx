import React from 'react'
import image from "../assets/About_us_comp1.svg"
import image1 from "../assets/About_us_comp2.svg"

const About = () => {
  return (
    <section className='w-full pt-32 px-4 md:px-16 flex flex-col items-center gap-12'>
      {/* Heading */}
      <h1 className='text-4xl md:text-5xl font-extrabold text-center' style={{
        WebkitTextStroke: "1px #ffd149",
        color: "transparent",
      }}>
        ABOUT US
      </h1>

      {/* Content */}
      <div className='flex flex-col lg:flex-row justify-between items-center gap-12 w-full'>
        {/* Text Content */}
        <div className='w-full lg:w-1/2 flex flex-col gap-4 text-center lg:text-left'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi unde debitis quasi itaque alias impedit dolore, voluptates consequuntur vero eaque nemo deleniti consectetur quod ullam. Possimus esse sapiente fugit numquam.
          </p>
          <p className='text-Yellow'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi unde debitis quasi itaque alias impedit dolore, voluptates consequuntur vero eaque nemo deleniti consectetur quod ullam.
          </p>
        </div>

        {/* Card Section */}
        <div className='flex flex-col sm:flex-row justify-center items-center gap-8'>
          {/* Card 1 */}
          <div className='bg-gradient-to-b from-lightYellow to-yel flex flex-col items-center px-6 py-4 rounded-3xl shadow-[6px_6px_0px_rgba(246,246,246,1)]'>
            <img src={image} className="w-32 sm:w-40" />
            <h2 className='text-black font-semibold text-xl sm:text-2xl text-center mt-2'>Contrary to <span className='block'>Popular</span></h2>
          </div>

          {/* Card 2 */}
          <div className='bg-gradient-to-b from-lightYellow to-yel flex flex-col items-center px-6 py-4 rounded-3xl shadow-[6px_6px_0px_rgba(246,246,246,1)]'>
            <img src={image1} className='w-32 sm:w-40 mt-2' />
            <h2 className='text-black font-semibold text-xl sm:text-2xl text-center mt-2'>Contrary to <span className='block'>Popular</span></h2>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

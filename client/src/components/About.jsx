import React from 'react'
import image from "../assets/About_us_comp1.svg"
import image1 from "../assets/About_us_comp2.svg"

const About = () => {
  return (
    <div className='flex flex-col mt-24 items-center gap-12 '>
      <h1 className='text-5xl font-extrabold' style={{
        WebkitTextStroke: "1px #ffd149",
        color: "transparent",
      }}>ABOUT US</h1>
      <div className='flex justify-around items-center mt-8 '>
        <div className='flex flex-col w-1/3 '>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi unde debitis quasi itaque alias impedit dolore, voluptates consequuntur vero eaque nemo deleniti consectetur quod ullam. Possimus esse sapiente fugit numquam.</p>
          <p className='text-Yellow'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi unde debitis quasi itaque alias impedit dolore, voluptates consequuntur vero eaque nemo deleniti consectetur quod ullam.</p>
        </div>
        <div className='flex gap-20'>
          <div className='bg-gradient-to-b from-lightYellow to-yel flex flex-col items-center px-8 rounded-3xl py-4 ' style={{ boxShadow: '6px 6px 0px 0px rgba(246,246,246,255)' }}>
            <img src={image}/>
            <h2 className='text-black font-semibold text-2xl'>Contrary to <span className='block text-center'>Popular</span></h2>
          </div>
          <div className='bg-gradient-to-b from-lightYellow to-yel flex flex-col items-center justify-center gap-4 px-8 py-4 rounded-3xl ' style={{ boxShadow: '6px 6px 0px 0px rgba(246,246,246,255)' }}>
            <img src={image1} className='mt-2 ml-4 '/>
            <h2 className='text-black font-semibold text-2xl'>Contrary to <span className='block text-center'>Popular</span></h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
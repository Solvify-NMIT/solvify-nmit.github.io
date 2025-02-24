import React from 'react'

const About = () => {
  return (
    <div className='flex flex-col mt-10 items-center gap-12'>
      <h1 className='text-5xl font-extrabold' style={{
        WebkitTextStroke: "1px #ffd149",
        color: "transparent",
      }}>ABOUT US</h1>
      <div className='flex '>
        <div className='flex flex-col w-1/3 ml-40'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi unde debitis quasi itaque alias impedit dolore, voluptates consequuntur vero eaque nemo deleniti consectetur quod ullam. Possimus esse sapiente fugit numquam.</p>
          <p className='text-Yellow'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi unde debitis quasi itaque alias impedit dolore, voluptates consequuntur vero eaque nemo deleniti consectetur quod ullam.</p>
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default About
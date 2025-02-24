import React, { createRef } from 'react'
import image1 from "../assets/Hero_comp1.svg"
import image from "../assets/solvifycroplogo.png"
import image2 from "../assets/Hero_comp2.svg"

const Home = ({scrollToProject}) => {

  return (
    <div className='min-h-screen'>
      <div className='flex justify-between items-center'>
        <div>
          <img src={image1} className=' max-w-[350px] ' />
        </div>
        <div className='flex flex-col justify-center items-center gap-11 mt-16 '>
          <div className="flex flex-col items-center ">
             <img src={image} className="rounded-lg w-40 " />
             <h2 className='font-light tracking-wide text-Yellow text-4xl'>Solvify</h2>
          </div>
            <h1 className='text-5xl font-bold text-Yellow'>BRIDGING GAPS</h1>
            <h1 className='text-5xl font-bold '>SOLVING CHALLENGES</h1>
          <button onClick={() => scrollToProject()} className='bg-Yellow px-6 py-2 rounded-3xl text-black font-extrabold text-lg'>GO TO PROJECTS</button>
        </div>
        <div>
          <img src={image2} className=' max-w-[350px] max-h-[700px] relative top-[250px] ' />
        </div>
      </div>
    </div>
  )
}

export default Home
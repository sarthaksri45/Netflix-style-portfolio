import React from 'react'
import Carousel from '../components/Carousel'
const Projects = () => {
  let slides=[
    "/imagify1.jpg",
    "/imagify2.jpg",
    "/imagify3.jpg",
    "/imagify4.jpg",
  ]
  return (
    <>

  <div className='flex mt-15  md:mt-40 m-auto md:ml-20 w-100 md:w-300 bg-white shadow-2xl hover:shadow-red-600 rounded-xl '>
    <div className='md:flex gap-2.5'>
      <Carousel slides={slides}/>
      <div className='w-100  md:w-150 p-2'>
      <h1 className='text-3xl text-center font-bold text-red-600'>Imagify</h1>
      <h2 className='font-bold text-black'>About the Project</h2>
      <p className='text-gray-500'>Imagify is a web application that allows users to generate images from text prompts using an external AI image generation API. The app focuses on simplicity and usability, allowing users to quickly enter a prompt and receive a generated image.</p>
      <div className='flex gap-10'>
      <div>
      <h3 className='text-black font-bold mt-1'>Tech Stack</h3>
      <ul className='text-gray-600 list-disc pl-5 mb-2'>
      <li>React</li>
      <li>Javascript</li>
      <li>Nodejs</li>
      <li>Tailwind</li>
      </ul>
      </div>
      <div>
      <h3 className='text-black font-bold mt-1'>Key features</h3>
      <ul className='text-gray-600 list-disc pl-5 mb-2'>
      <li>Converts text prompts into AI-generated images</li>
      <li>Simple and user-friendly interface</li>
      <li>Real-time image display</li>
      </ul>
      </div>  
      </div>
      <a href="https://imagify-3qfe.vercel.app/" className='text-red-600 pl-1 font-bold text-2xl'>Live Link</a>
      </div>
      
    </div>

  </div>
  </>
  )
}

export default Projects

import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const Home = () => {
  const [image, setimage] = useState("/sarthaksrivastavcv.pdf")
  const navigate= useNavigate();
  return (
    <div className="bg-black min-h-screen w-full flex flex-col justify-center items-center p-6">

      <p className="text-white text-center text-3xl sm:text-5xl mb-10">
        Who's Watching?
      </p>

      <div className="md:ml-10 flex flex-wrap gap-8 justify-center items-center">

        <div className="flex flex-col items-center">
          <img onClick={()=>{navigate("/Aboutme")}} className="w-24 sm:w-32 md:w-38 rounded-2xl hover:scale-110 duration-200 cursor-pointer" src="/netflixblue.jpg" />
          <p className="text-white mt-2 md:text-xl sm:text-base">About Me</p>
        </div>

        <div className="flex flex-col items-center">
          <img onClick={()=>{navigate("/Projects")}} className="w-24 sm:w-32 md:w-38 rounded-2xl hover:scale-110 duration-200 cursor-pointer" src="/netflixgreen.webp" />
          <p className="text-white mt-2 md:text-xl text-sm sm:text-base">Projects</p>
        </div>

        <div className="flex flex-col items-center">
          <img onClick={()=>{navigate("/Education")}} className="w-24 sm:w-32 md:w-38 rounded-2xl hover:scale-110 duration-200 cursor-pointer" src="/netflix-yellow.jpg" />
          <p className="text-white mt-2 md:text-xl text-sm sm:text-base">Education</p>
        </div>
        
        <a href={image} download className="flex flex-col items-center cursor-pointer">
          <img
            className="w-24 sm:w-32 md:w-38 rounded-2xl hover:scale-110 duration-200"
            src="/netflix-red.jpg"
          />
          <p className="text-white mt-2 md:text-xl text-sm sm:text-base cursor-default">Resume</p>
        </a>
        

      </div>

    </div>
  )
}

export default Home
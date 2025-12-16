import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';

const Navbar = () => {
const navigate= useNavigate();
const [isTop, setIsTop] = useState(true);
useEffect(()=>{
  const handlescroll=()=>{
    setIsTop(window.scrollY<50);
  };
   window.addEventListener("scroll", handlescroll);
    return () => window.removeEventListener("scroll", handlescroll);
},[])
  return (
     <div className={`fixed top-0 z-50 w-full  flex items-center justify-between  transition-all duration-300 overflow-hidden
      ${isTop ?  "bg-linear-to-b from-black/40 to-transparent"
  : "bg-black shadow-lg"}
    `}>
      <div>
        <img onClick={()=>{navigate("/")}} className='w-60 py-1 md:w-80 md:py-3.5 px-4 cursor-pointer' src="/check.png" />
      </div>
      <div className='flex  gap-3 mr-5 md:gap-10 md:mr-160'>
        <ul onClick={()=>{navigate("/Home")}} className='text-sm md:text-2xl cursor-pointer hover:text-red-500'>Home</ul>
        <ul onClick={()=>{navigate("/Education")}} className='text-sm md:text-2xl cursor-pointer hover:text-red-500'>Education</ul>
        <ul onClick={()=>{navigate("/Projects")}} className='text-sm md:text-2xl cursor-pointer hover:text-red-500'>Projects</ul>
      </div>
      <div>
        <img onClick={()=>{navigate("/Home")}} className='size-8  rounded-full mr-7 my-1 object-cover md:size-13 md: cursor-pointer' src="/netflixblue.jpg" alt="" />
      </div>
    </div>
  )
}

export default Navbar

import React from 'react'

const Education = () => {
  return (
    <div className='h-screen pl-4  bg-linear-to-b from bg-red-800 via-red-900 to to-black md:gap-15 w-full md:flex justify-center items-center '>
     <div className='bg-white text-black mt-10 md:mt-0 w-90 md:w-150  items-center rounded-xl opacity-100/2 shadow-2xl hover:shadow-red-600 p-1.5'>
          <h1 className='text md:text-3xl font-bold  md:mt-5 mb-2 md:mb-4'>Bachelor of Computer Applications from ITS College, Mohan Nagar</h1>
          <img src="/its.webp" alt="" className="w-full  opacity-100 rounded-xl shadow-2xl"/>
          <div className='mt-1 md:mt-2'>
          <h1 className=' md:text-2xl font-bold text-gray-500'> YEAR : 2020 - 2023</h1>
          <p>Learned the basics of computer applications and programming through college coursework and practical assignments.</p>
          <h2 className='font-bold'>Key Learning Areas</h2>
          <ul className='list-disc pl-6'>
            <li>Basics of programming and logic building</li>
            <li>Introduction to data structures and databases</li>
            <li>Fundamentals of web development</li> 
           </ul> 
          </div>
    </div>
     <div className='bg-white text-black mt-8 md:mt-0 w-90 md:w-150  md:ml-0 items-center rounded-xl opacity-100/2 shadow-2xl hover:shadow-red-600 p-1.5'>
          <h1 className='text md:text-3xl font-bold  md:mt-5 mb-2 md:mb-4'>Master of Computer Applications from Inderprastha Engineering College</h1>
          <img src="/Ipec.webp" alt="" className="w-130 h-59  opacity-100 rounded-xl"/>
          <div className='mt-1 md:mt-2'>
          <h1 className=' md:text-2xl font-bold text-gray-500'> YEAR : 2024 - 2026</h1>
          <p>Focused on advanced computing concepts with an emphasis on real-world applications and scalable systems.</p>
          <h2 className='font-bold'>Key Learning Areas</h2>
          <ul className='list-disc pl-6'>
            <li>Basics of software development concepts</li>
            <li>Introduction to cloud computing and networks</li>
            <li>Data Structures and Algorithms</li> 
           </ul> 
          </div>
    </div>
    </div>
  )
}

export default Education

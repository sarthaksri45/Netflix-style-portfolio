import React, { use } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from "motion/react"
import { useState } from 'react'

const Intro = () => {
const clicksound = new Audio("/netflixsound.mp3")
const navigate= useNavigate();
  const [start, setStart] = useState(false);
  return (
   <motion.div  onClick={() => {
        clicksound.play();
        setStart(true);
      }}
      animate={start ? { opacity: 0 } : {}}
      transition={{ duration: 3.2 }} 
      onAnimationComplete={() => navigate("/Home")}
      className="bg-black flex w-screen h-screen items-center justify-center ">
    <motion.img
        src="../src/fontbolt.png"
        alt=""
        initial={{ scale: 1 }}
        animate={start ? { scale: 90 } : { scale: 1 }}   
        transition={{ duration: 1 }}                    
        className="w-130 object-contain"
      />

   </motion.div>
  )
}

export default Intro

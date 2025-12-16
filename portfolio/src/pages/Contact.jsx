import React from 'react'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { useNavigate } from 'react-router-dom'


const Contact = () => {
    const navigate= useNavigate()
    const form = useRef()
  const submithandle=(e)=>{
         e.preventDefault()
         console.log("stopped");
         
    emailjs.sendForm('service_nj0tlj2','template_4nmcsjs',form.current,{
        publicKey:'U6CKEgTQjodutFTiC'
    }).then(()=>{
        console.log('Success')
        alert("Message sent successfully!")
        navigate('/home')
    },(error)=>{
        console.log('Failed');
        
    })     
  }
  return (
    <>
    <div className='h-screen bg-linear-to-b from bg-red-800 via-red-900 to to-black  w-screen flex justify-center items-center overflow-hidden'> 
        <div className='bg-white text-black w-80  md:w-150 items-center rounded-xl opacity-100/2 shadow-2xl hover:shadow-red-600 overflow-hidden'>
            <div className='text-center w-120 mt-3 md:w-150 md:px-10 md:mt-8'>
            <h1 className='text mr-40 md:mr-0 md:text-3xl font-bold  md:mt-5'>Start a new season: Message me</h1>
            </div>
             <form onSubmit={submithandle} ref={form}>
            <div className=' mt-6 gap-6 md:flex md:px-8 md:py-2'>
            <input type="text" placeholder='First Name' name='first_name' className='border border-gray-300 rounded-full w-70 ml-6 md:ml-0 md:w-60 h-10 md:h-12 text-center outline-none '/>
            <input type="text" placeholder='Last Name' name='second_name' className='border border-gray-300 rounded-full w-70 mt-2.5 ml-6 md:ml-0 md:mt-0 mb-3 md:mb-0 md:w-60 h-10 md:h-12 text-center outline-none'/>
            </div>
            <div className='border  border-gray-300 rounded-full flex items-center w-70 md:w-134 ml-6 md:ml-7.5 md:gap-2.5 md:mx-8 md:mt-3 h-10 md:h-12 mb-3 md:mb-0'>
                <img className='w-8 md:w-12 ml-3 md:ml-3 mr-11 md:mr-0' src="/email.png" alt="" />
                <input type="email" placeholder='Enter your email' name='user_mail' className=' outline-none md:w-90 h-12 '/>
            </div>
              <div className='border border-gray-300 rounded-full md:mt-4 md:gap-3 flex md:mx-8 md:h-12 h-10 items-center w-70 md:w-134 ml-6 md:ml-7.5'>
                <select defaultValue="+91" name='phone_code' className='ml-3 md:ml-0 w-15 cursor-pointer text-center border-r border-gray-300'>
                <option value="+1">+1</option>
                <option value="+91">+91</option>
                <option value="+44">+44</option>
                </select>
                  <input type="tel" name='phone_number' placeholder='Phone number' className='ml-6.5 md:ml-0 outline-none w-90 h-12 '/>
              </div>
              <div className='border border-gray-300 h-22 mt-2.5 ml-6 w-70 md:w-110 md:h-30 md:mt-6 md:ml-20 rounded-2xl flex'>
                <input type="text" name='message' placeholder='Message' className='w-full h-full text-center outline-none' />
              </div>
              <div className='border w-50 ml-17 md:w-100 py-1 md:py-2 md:ml-25 cursor-pointer mt-2.5 md:mt-6 border-gray-300 rounded-full bg-linear-to-b from bg-red-900 to to-black text-white text-2xl text-center mb-2'>
                <input type="submit" className='cursor-pointer' />
              </div>
            </form> 
        </div>
    </div>
   
    </>
  )
}
export default Contact

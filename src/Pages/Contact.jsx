import React from 'react'
import Navbar from "../Components/Navbar.jsx"
const Contact = () => {
  return (
   <>
   <Navbar/>
   <section className='min-h-screen w-full p-20 bg-[#212932]'>
    <div className='h-screen w-[50%] ml-96 rounded-3xl border-2 border-white '>
        <p className='text-white uppercase font-bold px-52 cursor-pointer text-4xl'>Contact us</p>
        <p className='text-white font-semibold px-60 py-2'>Get in Touch with us</p>
         <form action=""></form>
    </div>
   </section>
   </>
  )
}

export default Contact

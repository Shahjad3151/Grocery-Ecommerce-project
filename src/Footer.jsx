import React from 'react'
import { HiOutlineMailOpen } from "react-icons/hi";

function Footer() {
  return (
    <div className='bg-green-400  mt-5 rounded-2xl'>
      <div className="flex flex-col md:flex-row md:items-center md:justify-start items-center gap-4 py-5 px-4">
        
      <div className="flex justify-between mr-auto">
        <div className='flex items-center gap-4'>
          <HiOutlineMailOpen className='text-[40px]' />
        </div>

       
        <div className='text-center md:text-left'>
          <h3 className='font-semibold'>Signup to our newsletters</h3>
          <p>... and receive $20 coupon for first shopping</p>
        </div>
        </div>
       
        <div className="bg-white rounded-xl px-2 py-1">
          <input
            type="text"
            placeholder='Enter your email'
            className="outline-none px-2 py-1"
          />
        </div>

     
        <button className="bg-white text-green-500 font-medium px-4 py-2 rounded-xl hover:bg-green-600 hover:text-white transition">
          Subscribe
        </button>
      </div>
    </div>
  )
}

export default Footer

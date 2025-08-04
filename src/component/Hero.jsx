import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";

function Hero() {
  return (
    <div className='grid grid-cols-1 xl:grid-cols-3 mt-3 xl:grid-rows-2 gap-4 w-full font-serif relative'>
      
      {/* Image Section */}
      <div className="relative xl:col-span-2 xl:row-span-2">
        <img
          className='w-full h-[300px] sm:h-[400px] md:h-[500px] xl:h-full rounded-lg object-cover'
          src="hero__1.webp"
          alt="Dry Fruits"
        />

        <div className="absolute mx-5 top-1/2 left-6 transform -translate-y-1/2 text-white space-y-2 sm:space-y-4 max-w-xs sm:max-w-sm md:max-w-md text-left">
          <p className='text-xl sm:text-2xl font-semibold text-blue-700'>100% Original Dry Fruits</p>
          <p className='text-2xl sm:text-4xl font-bold text-black'>Best Quality of <br/> <span className='text-amber-900'>Fruits</span></p>
          <div className='text-gray-700 text-lg sm:text-xl pt-2 sm:pt-4'>Starting At</div>
          <div className='text-red-700 text-xl sm:text-2xl'>$112.8</div>
          <div className='bg-green-500 hover:bg-green-700 text-white flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 rounded cursor-pointer w-fit text-base sm:text-lg'>
            Shop Now <FaArrowRightLong /> </div>
        </div>
      </div>
      
      {/* right side image grid*/}
      <div className="relative">
          <img
          className='w-full h-[300px] sm:h-[400px] md:h-[500px] xl:h-full rounded-lg object-cover'
          src="hero__2.webp"
          alt="Dry Fruits"
        />

        <div className="absolute mx-5 top-1/2 left-6 transform -translate-y-1/2 text-white space-y-2 sm:space-y-4 max-w-xs sm:max-w-sm md:max-w-md text-left">
           <p className='text-2xl sm:text-2xl font-bold text-black'>Best Yummy Pizza</p>
          <div className='text-gray-700 text-lg sm:text-xl pt-2 sm:pt-4'>Starting At</div>
          <div className='text-red-700 text-xl sm:text-xl'>$43.6</div>
          <div className='bg-pink-500 hover:bg-pink-700 text-white flex items-center gap-2  px-2 py-2 sm:px-4 sm:py-2 rounded cursor-pointer w-fit text-base sm:text-lg'>
            Shop Now <FaArrowRightLong /> </div>
        </div>
      </div>

      <div className="relative">
          <img
          className='w-full h-[300px] sm:h-[400px] md:h-[500px] xl:h-full rounded-lg object-cover'
          src="hero__3.webp"
          alt="Dry Fruits"
        />

        <div className="absolute mx-5 top-1/2 left-6 transform -translate-y-1/2 text-white space-y-2 sm:space-y-4 max-w-xs sm:max-w-sm md:max-w-md text-left">
          <p className='text-2xl sm:text-2xl font-bold text-black'>Best Yummy Chips</p>
          <div className='text-gray-700 text-lg sm:text-xl pt-2 sm:pt-4'>Starting At</div>
          <div className='text-red-700 text-xl sm:text-xl'>$43.8</div>
          <div className='bg-blue-500 hover:bg-blue-700 text-white flex items-center gap-2 px-2 py-2 sm:px-4 sm:py-2 rounded cursor-pointer w-fit text-base sm:text-lg'>
            Shop Now <FaArrowRightLong /> </div>
        </div>
      </div>

    </div>
  );
}

export default Hero;

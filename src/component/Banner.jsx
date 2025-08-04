import React from 'react'

function Banner() {
  return (
    <div className=' shadow-lg grid xl:grid-cols-2 md:grid-cols-2 sm:grid gap-4 w-full rounded-2xl object-cover'>
      <img src='banner__1.webp ' className="img"></img>
      <img src='banner__2.webp' className="img"></img>
    </div>
  )
}

export default Banner

import React from 'react'
import Swiper from '@/components/swiper/page'
const HomeSecSix = () => {
  return (
    <div className='border bg-black pb-10'>
           <div className='text-center px-4 py-12'>
          <h2 className="f-18 text-transparent bg-clip-text bg-gradient-to-b from-blue-500 via-blue-300 to-white">
          TESTIMONIALS
          </h2>
          <p style={{color:"rgba(255, 255, 255, 0.9)"}} className='f-40-700'>
          What our User Says
          </p>
        </div>
        <div className='px-5'>
            <Swiper/>
        </div>
    </div>
  )
}

export default HomeSecSix
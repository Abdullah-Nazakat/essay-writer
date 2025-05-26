import React from 'react'
import Swiper from '@/components/swiper/page'
const HomeSecSix = () => {
  return (
    <div className='border bg-black pb-10'>
         <div id="Testimonials" className='scroll-mt-25'/> 
           <div className='text-center px-4 py-12'>
           <div data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600"/>
          <h2 className="f-18 text-transparent bg-clip-text bg-gradient-to-b from-blue-500 via-blue-300 to-white">
          TESTIMONIALS
          </h2>
          <h3 style={{color:"rgba(255, 255, 255, 0.9)"}} className='f-40-700'>
          What our User Says
          </h3>
        </div>
        <div className='px-5'>
            <Swiper/>
        </div>
    </div>
  )
}

export default HomeSecSix
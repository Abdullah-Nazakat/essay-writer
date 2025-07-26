import React from 'react'
import HomeHero from '@/features/home/home-hero'
import HomeContent from '@/features/home/home-content'
import HomeMainarea from '@/features/home/home-mainarea'
import HomeSecTwo from '@/features/home/home-sec-two'
import HomeScThreeUpdated from '@/features/home/home-sec-three-updated'
import HomeSecFour from '@/features/home/home-sec-four'
import HomeSecFive from '@/features/home/home-sec-five'
import HomeSecSix from '@/features/home/home-sec-six'
// import HomeSecSeven from '@/features/home/home-sec-seven'
import Footor from '@/components/navbar/footor/footor'
// import HomeSecThree from '@/features/home/home-sec-three'
// Tags
import HomeFaqs from '@/features/home/home-faqs'
import HomeSecEight from '@/features/home/home-sec-eight'
const page = () => {
  return (
    <div>
      <HomeHero/>
      <HomeContent/>
      <div className='absolute top-70 w-full'>
      <HomeMainarea/>
      <HomeSecTwo/>
      {/* <HomeSecThree/> */}
      <HomeScThreeUpdated/>
      <HomeSecFour/>
      <HomeSecFive/>
      <HomeSecSix/>
      {/* <HomeSecSeven/> */}
      <HomeFaqs/>
      <HomeSecEight/>
      <Footor/>
      </div>
      
    </div>
  )
}

export default page
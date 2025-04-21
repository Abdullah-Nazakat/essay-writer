import React from 'react'
import Image from 'next/image'
import Linkdin from '@/components/svg/linkdin.svg'
import Facebook from '@/components/svg/facebook.svg'
const Footer = () => {
  return (
    <div className='border-t border-gray-800 bg-black text-white py-12 px-6 sm:px-12 lg:px-20'>
      <div className='max-w-7xl mx-auto'>
        {/* Top Section */}
        <div className='flex flex-col md:flex-row gap-8 md:gap-16 lg:gap-24 mb-12'>
          {/* Product Column */}
          <div className='flex-1'>
            <h3 className='text-white text-lg font-bold mb-4'>Product</h3>
            <ul className='space-y-3 text-gray-400'>
              <li><a href="#" className='hover:text-white transition'>Features</a></li>
              <li><a href="#" className='hover:text-white transition'>Pricing</a></li>
              <li><a href="#" className='hover:text-white transition'>Integrations</a></li>
              <li><a href="#" className='hover:text-white transition'>Updates</a></li>
            </ul>
          </div>

          {/* Information Column */}
          <div className='flex-1'>
            <h3 className='text-white text-lg font-bold mb-4'>Information</h3>
            <ul className='space-y-3 text-gray-400'>
              <li><a href="#" className='hover:text-white transition'>Blog</a></li>
              <li><a href="#" className='hover:text-white transition'>Documentation</a></li>
              <li><a href="#" className='hover:text-white transition'>Guides</a></li>
              <li><a href="#" className='hover:text-white transition'>Support</a></li>
            </ul>
          </div>

          {/* Company Column */}
          <div className='flex-1'>
            <h3 className='text-white text-lg font-bold mb-4'>Company</h3>
            <ul className='space-y-3 text-gray-400'>
              <li><a href="#" className='hover:text-white transition'>About Us</a></li>
              <li><a href="#" className='hover:text-white transition'>Careers</a></li>
              <li><a href="#" className='hover:text-white transition'>Contact</a></li>
              <li><a href="#" className='hover:text-white transition'>Press</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className='flex flex-col-reverse md:flex-row justify-between items-center pt-8 border-t border-gray-800'>
          {/* Legal Links */}
          <div className='flex flex-wrap gap-4 md:gap-6 mt-6 md:mt-0 text-sm text-gray-400'>
            <a href="#" className='hover:text-white transition'>Terms of Service</a>
            <a href="#" className='hover:text-white transition'>Privacy Policy</a>
            <a href="#" className='hover:text-white transition'>Cookie Policy</a>
          </div>

          {/* Social Icons */}
          <div className='flex gap-6 items-center'>
            <a href="#" className='text-gray-400 hover:text-white transition'>
             <Image
             src={Linkdin}
             width={35}
             height={35}
             />
            </a>
            <a href="#" className='text-gray-400 hover:text-white transition'>
            <Image
             src={Facebook}
             width={10}
             height={16}
             />
            </a>
          </div>
        </div>
      </div>
      <div className='text-gray-500 flex justify-center items-center 
      absolute bottom-2.5 text-center left-0 right-0'>
      © 2025 EssayWriter All rights reserved.
      </div>
    </div>
  )
}

export default Footer
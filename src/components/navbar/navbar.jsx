'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-30"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Sticky Navbar Container */}
      <div className='fixed top-0 left-0 w-full z-40 transition-colors duration-300'>
        <div className={`text-white ${isScrolled ? 'bg-black' : 'bg-transparent'} flex items-center p-6 relative transition-colors duration-300`}>
          {/* Logo - Left Aligned */}
          <div className='mr-auto'>
            <span className='font-bold text-xl'>LOGO</span>
          </div>

          {/* Desktop Navigation Links - Centered */}
          <div className='hidden md:flex gap-8 absolute left-1/2 transform -translate-x-1/2'>
            <Link href="#" className='hover:text-gray-300 transition-colors'>AI Essay Writer</Link>
            {/* <a href="#" className='hover:text-gray-300 transition-colors'>Contact Us</a> */}
            <Link href="#faqs" className='hover:text-gray-300 transition-colors'>FAQs</Link>
          </div>

          {/* Mobile Burger Menu Button */}
          <button 
            className='md:hidden ml-auto z-50'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            <div className={`w-6 flex flex-col gap-1 transition-all ${isMenuOpen ? 'rotate-90' : ''}`}>
              <span className={`h-0.5 w-full bg-white transition-all ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`h-0.5 w-full bg-white transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`h-0.5 w-full bg-white transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </div>
          </button>

          {/* Mobile Menu */}
          <div className={`fixed top-0 right-0 h-full w-64 bg-gray-900 z-40 flex flex-col pt-20 px-6 transition-all duration-300 ease-in-out transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className='flex flex-col gap-8 text-xl'>
              <Link href="#" className='hover:text-gray-300 transition-colors border-b border-gray-700 pb-2' onClick={() => setIsMenuOpen(false)}>AI Essay Writer</Link>
              {/* <a href="#" className='hover:text-gray-300 transition-colors border-b border-gray-700 pb-2' onClick={() => setIsMenuOpen(false)}>Contact Us</a> */}
              <Link href="#faqs" className='hover:text-gray-300 transition-colors border-b border-gray-700 pb-2' onClick={() => setIsMenuOpen(false)}>FAQs</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar

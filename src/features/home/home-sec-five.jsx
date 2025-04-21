import React from 'react';
import Image from 'next/image';
import Vectorup from '../../../public/Vectorup.png';
import Vectordown from '../../../public/Vectordown.png';
import MagnifyingGlassIcon from '../../components/svg/magni.svg';

const steps = [
  {
    id: 1,
    title: 'Enter Your Topic',
    description: 'Type in your essay topic or question—anything from a broad subject to a specific prompt.',
    icon: <MagnifyingGlassIcon className="w-8 h-8 text-blue-600" />,
  },
  {
    id: 2,
    title: 'Generate Content',
    description: 'Our AI analyzes your topic and creates a well-structured essay draft instantly.',
    icon: <MagnifyingGlassIcon className="w-8 h-8 text-blue-600" />,
  },
  {
    id: 3,
    title: 'Download & Use',
    description: 'Review, edit if needed, and download your ready-to-use essay in your preferred format.',
    icon: <MagnifyingGlassIcon className="w-8 h-8 text-blue-600" />,
  },
];

const HomeSecFive = () => {
  return (
    <div className='px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 bg-gray-50'>
      <div className='text-center mb-10 sm:mb-16 lg:mb-20 max-w-3xl mx-auto'>
        <h2 className="f-18 text-transparent bg-clip-text bg-gradient-to-b from-blue-500 via-blue-300 to-white uppercase tracking-wider">
          How it works
        </h2>
        <h3 className='text-2xl sm:text-3xl lg:text-4xl font-bold mt-2 text-gray-800'>
          Get Started in 3 Easy Steps
        </h3>
      </div>

      <div className='relative mt-0 md:-mt-20'>
        {/* Steps Container */}
        <div className='flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 lg:gap-8 relative z-10'>
          {steps.map((step, index) => (
            <div 
              key={step.id}
              className={`flex flex-col items-center text-center w-full max-w-xs mx-auto ${
                index === 1 ? 'md:mt-40' : ''
              }`}
            >
              {/* Step Icon Indicator */}
              <div className='w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-white flex items-center justify-center shadow-md mb-4 border border-gray-200'>
                {/* {step.icon} */}
                <Image
                src={MagnifyingGlassIcon}
                />
              </div>
              
              {/* Step Content */}
              <h3 className='text-lg sm:text-xl font-semibold text-gray-800'>{step.title}</h3>
              <p className='text-gray-600 mt-2 text-sm sm:text-base'>{step.description}</p>
            </div>
          ))}
        </div>

        {/* Responsive Arrows */}
        <div className="absolute inset-0 w-full h-full pointer-events-none">
          {/* Mobile Arrows (vertical) */}
          <div className="md:hidden flex flex-col items-center justify-between h-full">
            <div className="h-16 w-px bg-gray-300 my-4"></div>
            <div className="h-16 w-px bg-gray-300 my-4"></div>
          </div>

          {/* Desktop Arrows (horizontal) */}
          <div className="hidden md:block w-full h-full">
            {/* Arrow between Step 1 and Step 2 */}
            <div className="absolute top-[50%] left-1/3 transform -translate-x-1/2">
              <Image 
                src={Vectordown} 
                alt="Arrow to next step" 
                width={180}
                height={40}
                className="opacity-80"
              />
            </div>
            
            {/* Arrow between Step 2 and Step 3 */}
            <div className="absolute top-[75%] right-1/3 transform translate-x-1/2">
              <Image 
                src={Vectorup} 
                alt="Arrow to next step" 
                width={180}
                height={40}
                className="opacity-80"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSecFive;
import React from 'react';
import Image from 'next/image';
import Robot from '../../../public/robot.png';
import Ellipse from '../../../public/ellipse.png';
import Rocket from '@/components/svg/rocket.svg';
import Bulb from '@/components/svg/bulb.svg';

const HomeSecTwo = () => {
  return (
<div className='border mx-4 md:mx-20 rounded-[15px] bg-black relative overflow-hidden'>
  {/* White glow on top left */}
  <div className="absolute top-0 -left-2 w-[500px] h-[150px] bg-[rgba(255,255,255,0.5)] blur-[120px] z-0 pointer-events-none" />
      <Image
        src={Ellipse}
        width={200}
        height={200}
        className='hidden md:block absolute bottom-0 -left-2 w-24 h-auto'
        alt="Decorative ellipse"
      />
      
      <Image
        src={Robot}
        width={300}
        height={300}
        className='hidden md:block absolute bottom-0 right-0 h-auto'
        alt="Decorative robot"
      />

      <div className='flex justify-center flex-col gap-4 text-center p-8 md:p-12 relative z-10'>
        <h2 className="f-18 text-transparent bg-clip-text bg-gradient-to-b from-blue-500 via-blue-300 to-white">
          WHAT WE ARE
        </h2>
        
        <p className='f-40-700 font-bold text-white'>
          We Help To Get Better Essays
        </p>
        
        <p className='text-gray-300 max-w-2xl mx-auto'>
         We are the best AI to write essay, designed to help you craft high-quality essays in a fraction of the time. Whether you're a student facing tight deadlines or someone who just needs a little help getting started, our tool makes writing fast, easy, and stress-free.
        </p>

        <div className='flex flex-col md:flex-row justify-center gap-8 mt-8 text-white'>
          {/* Goal Card */}
          <div className='flex flex-col md:flex-row items-center gap-4 text-left max-w-md'>
            <div>
              <Image
                src={Rocket}
                width={100}
                height={100}
                
                alt="Rocket icon"
              />
            </div>
            <div>
              <h3 className='text-xl font-semibold'>Our Goal</h3>
              <p className='text-gray-300'>
                Our goal is to help students, professionals, and everyday users write faster and more effectively.
              </p>
            </div>
          </div>

          {/* AI Card */}
          <div className='flex flex-col md:flex-row items-center gap-4 text-left max-w-md'>
            <div>
              <Image
                src={Bulb}
                width={100}
                height={100}
                
                alt="Bulb icon"
              />
            </div>
            <div>
              <h3 className='text-xl font-semibold'>Advanced AI</h3>
              <p className='text-gray-300'>
                The platform is powered by advanced AI that understands structure, tone, and academic requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSecTwo;
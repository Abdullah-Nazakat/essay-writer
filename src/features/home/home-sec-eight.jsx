import React from 'react';
import Image from 'next/image';
import appMockup from '../../../public/mobile.png'; 
import MobileEllipse from '../../../public/MobileEllipse.png';
import appleStoreBadge from '../../../src/components/svg/appleStoreBadge.svg'; 
// import googlePlayBadge from '../../../src/components/svg/googlePlayBadge.svg';

const HomeSecEight = () => {
  return (
    <div className='mx-4 sm:mx-8 md:mx-12 lg:mx-20 my-12 md:my-24 xl:my-32'>
      <div className='border border-gray-800 bg-black text-white rounded-2xl p-6 md:p-10 lg:p-12 flex flex-col lg:flex-row justify-between items-center gap-8 xl:gap-12 relative overflow-hidden'>
        {/* Background decoration - positioned absolutely */}
        <Image
          src={MobileEllipse}
          alt=""
          className='absolute bottom-0 left-0'
          width={100}
          height={100}
        />
        
        {/* Content container */}
        <div className='flex flex-col lg:flex-row justify-between items-center gap-8 xl:gap-16 w-full z-10 ml-0 lg:ml-50'>
          {/* Text Content - order changes on mobile */}
          <div className='flex-1 flex flex-col justify-between gap-6 order-2 lg:order-1'>
            <div className='flex flex-col gap-4'>
              <h2 className='f-40-700 leading-tight'>
                Download Our Mobile App
              </h2>
              <div className='flex flex-col  text-gray-300'>
                <p className='f-16'>
                  Download our mobile app to generate, edit, and manage your essays on the go—anytime, anywhere.
                </p>
                <p className='f-16'>
                  Smart, fast, and always at your fingertips.
                </p>
              </div>
            </div>

            {/* App Store Buttons */}
            <div className='flex flex-wrap gap-3 sm:gap-4 mt-2 md:mt-4'>
              <a href="#" className='inline-block'>
                {/* <div className='text-black border border-gray-300 bg-white hover:bg-gray-50
                 flex items-center gap-3 p-2 sm:p-3 rounded-lg transition-all cursor-pointer shadow-sm hover:shadow-md active:scale-95'>
                  <Image
                    src={googlePlayBadge}
                    width={32}
                    height={36}
                    alt="Google Play"
                    className='w-7 sm:w-8 h-auto'
                  />
                  <div className='flex flex-col leading-tight'>
                    <span className='text-[0.65rem] sm:text-xs text-gray-500'>
                      Get it on
                    </span>
                    <span className='text-sm sm:text-lg font-semibold'>
                      Google Play
                    </span>
                  </div>
                </div> */}
              </a>

              <a href="https://apps.apple.com/us/app/ai-genessay/id6745103595" className='inline-block'>
                <div className='text-black border border-gray-300 bg-white hover:bg-gray-50 flex items-center gap-3 p-2 sm:p-3 rounded-lg transition-all cursor-pointer shadow-sm hover:shadow-md active:scale-95'>
                  <Image
                    src={appleStoreBadge}
                    width={26}
                    height={31}
                    alt="App Store"
                    className='w-6 sm:w-7 h-auto'
                  />
                  <div className='flex flex-col leading-tight'>
                    <span className='text-[0.65rem] sm:text-xs text-gray-500'>
                      Download on the
                    </span>
                    <span className='text-sm sm:text-lg font-semibold'>
                      App Store
                    </span>
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* App Mockup Image */}
          <div className='flex-1 flex justify-center order-1 lg:order-2 w-full lg:w-auto'>
            <Image 
              src={appMockup} 
              alt="Mobile app mockup" 
              width={500} 
              height={500}
              className='w-auto h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[450px] object-contain'
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSecEight;
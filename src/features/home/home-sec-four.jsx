import React from 'react'
import Image from 'next/image'
import Ellipse4 from '../../../public/Ellipse4.png'
import Ellipse3 from '../../../public/Ellipse3.png'

const HomeSecFour = () => {
  const features = [
    {
      title: "✅ 100% Free to Use",
      description: "Get access to powerful AI writing tools without spending a dime. No hidden fees, no trial traps—just instant help when you need it.",
    //   icon: "✅"
    },
    {
      title: "⚡ Write Essays in Minutes",
      description: "Simply enter your topic and let the AI do the heavy lifting. From structure to flow, everything is generated in a matter of seconds.",
    //   icon: "svghere"
    },
    {
      title: "🧠 AI-Powered Accuracy",
      description: "Our advanced AI understands context, tone, and academic writing styles—delivering clear, relevant, and well-organized essays.",
    //   icon: "svghere"
    },
    {
      title: "📝 Fully Customizable",
      description: "Choose your tone (formal, casual, persuasive), academic level, and word count. Tailor your essay to fit your exact needs.",
    //   icon: "svghere"
    },
    {
      title: "🔍 Plagiarism-Free Content",
      description: "Each essay is created from scratch to ensure originality. You can trust your work to be unique and credible.",
    //   icon: "svghere"
    },
    {
      title: "🔒 Safe & Secure",
      description: "Your data and work are kept private and never shared. We prioritize your confidentiality and security.",
    //   icon: "svghere"
    }
  ];

  return (
    <div className='relative bg-black overflow-hidden'>
        <div className="absolute -bottom-2 right-0 w-[300px] h-[300px] bg-[rgba(255,255,255,0.5)] blur-[120px] z-0 pointer-events-none" />
      <div className='hidden md:block absolute bottom-120 left-0'>
        <Image src={Ellipse4} width={100} height={100} alt="Decorative ellipse" />
      </div>
      <div className='hidden md:block absolute right-20 top-0'>
        <Image src={Ellipse3} width={200} height={200} alt="Decorative ellipse" />
      </div>

      {/* Content - Made responsive with padding adjustments */}
      <div className='text-white flex flex-col gap-8 md:gap-[72px] px-4 sm:px-6 lg:px-20 py-12 md:py-20 z-10 relative'>
        <div className='text-center'>
          <h2 className="f-18 text-transparent bg-clip-text bg-gradient-to-b from-blue-500 via-blue-300 to-white">
            WHY CHOOSE US
          </h2>
          <p style={{color:"rgba(255, 255, 255, 0.9)"}} className='f-40-700'>
            Why Choose Our Free AI Essay Writer?
          </p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6'>
          {features.map((feature, index) => (
            <div 
              key={index}
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.13)",
                position: 'relative',
                padding: '32px',
                borderRadius: '12px'
              }}
              className='group hover:bg-opacity-20 transition-all duration-300'
            >
              {/* Gradient Border */}
              <div 
                style={{
                  position: 'absolute',
                  inset: 0,
                  padding: '1px',
                  borderRadius: '12px',
                  background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.77), rgba(255, 255, 255, 0.24))',
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude'
                }}
                className='pointer-events-none'
              ></div>
              
              <div className='flex gap-4 h-full'>
                {/* <div className='min-w-[40px]'>
                  {feature.icon}
                </div> */}
                <div className='flex flex-col gap-3'>
                  <h3 className='text-lg md:text-xl font-semibold'>
                    {feature.title}
                  </h3>
                  <p className='text-gray-300 text-sm md:text-base'>
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HomeSecFour
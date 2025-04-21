import React from 'react'
import Image from 'next/image'
import Frame from '../../../public/Frame.png'
import Aipower from '@/components/svg/aipower.svg'
import Content from '@/components/svg/content.svg'
import Custom from '@/components/svg/custom.svg'

const HomeSecThree = () => {
  const features = [
    {
      id: 1,
      icon: Aipower,
      title: "AI-Powered Essay Generation",
      description: "Generate well-structured, high-quality essays on any topic in seconds. Our advanced AI understands context, structure, and tone—giving you professional results instantly."
    },
    {
      id: 2,
      icon: Content,
      title: "Plagiarism-Free Content",
      description: "Every essay is crafted from scratch to ensure originality. Built-in checks help maintain academic integrity and keep your work 100% plagiarism-free."
    }
  ]

  const mainFeature = {
    id: 3,
    icon: Custom,
    title: "Customizable Writing Options",
    description: "Whether you need a formal academic paper, a persuasive argument, or a casual blog-style essay, our AI adapts to your writing style. Select your preferred tone (formal, casual, or persuasive), define the academic level (high school, college, or professional), and set your desired word count.",
    image: Frame
  }

  return (
    <div className='mx-4 md:mx-20 my-20'>
      <div className='text-center'>
        <h2 className="f-18 text-transparent bg-clip-text bg-gradient-to-b from-blue-500 via-blue-300 to-white">
          KEY FEATURES
        </h2>
        <p className='f-40-700'>
          What Makes Us Different
        </p>
      </div>
      
      {/* Top Features Grid */}
      <div className='flex flex-col md:flex-row justify-center gap-6 mt-10'>
        {features.map((feature) => (
          <FeatureCard 
            key={feature.id}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
      
      {/* Main Feature Card */}
      <div className='mt-6'>
        <MainFeatureCard 
          icon={mainFeature.icon}
          title={mainFeature.title}
          description={mainFeature.description}
          image={mainFeature.image}
        />
      </div>
    </div>
  )
}

// Reusable Feature Card Component
const FeatureCard = ({ icon, title, description }) => {
  return (
    <div 
      className='relative gap-6 flex flex-col p-8 md:p-12 rounded-[15px] overflow-hidden flex-1'
      style={{
        background: 'linear-gradient(to bottom, rgba(246, 246, 246, 1), rgba(231, 231, 231, 1))',
      }}
    >
      {/* Border Gradient (Pseudo-element) */}
      <div 
        className='absolute inset-0 rounded-[15px] pointer-events-none'
        style={{
          padding: '1px',
          background: 'linear-gradient(to right, rgba(0, 0, 0, 1), rgba(209, 209, 209, 1))',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
        }}
      ></div>

      <div 
      className='h-16 w-16 flex items-center justify-start'
      >
        <Image src={icon} width={50} height={50} alt={title} />
      </div>
      
      <div className='flex flex-col gap-2.5'>
        <h2 className='text-xl md:text-2xl font-bold text-gray-800'>
          {title}  
        </h2>
        <p className='text-gray-800'>
          {description}
        </p>
      </div>
    </div>
  )
}

// Main Feature Card Component
const MainFeatureCard = ({ icon, title, description, image }) => {
  return (
    <div 
      className='relative p-[1px] rounded-[15px] overflow-hidden'
      style={{
        background: 'linear-gradient(to right, rgba(0, 0, 0, 1), rgba(209, 209, 209, 1))'
      }}
    >
      <div 
        className='relative gap-6 flex flex-col p-8 md:p-12 rounded-[15px] h-full'
        style={{
          background: 'linear-gradient(to bottom, rgba(246, 246, 246, 1), rgba(231, 231, 231, 1))',
        }}
      >
        <div className='flex justify-between items-start gap-8 flex-col lg:flex-row'>
          <div className='flex-1 flex flex-col gap-6'>
            <div className='flex items-start gap-6 flex-col'>
              <div className='h-16 w-16 flex items-center justify-center'>
                <Image src={icon} width={50} height={50} alt={title} />
              </div>
              
              <div>
                <h2 className='text-xl md:text-2xl font-bold text-gray-800 mb-2'>
                  {title}
                </h2>
                <p className='text-gray-800'>
                  {description}
                </p>
              </div>
            </div>
          </div>
          
          <div className='flex-1 w-full lg:w-auto'>
            <div className='relative aspect-video w-full max-w-[480px] mx-auto'>
              <Image
                src={image}
                alt={title}
                fill
                className='object-contain'
          
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeSecThree
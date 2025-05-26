import React from 'react'
import Image from 'next/image';
import Key from '@/components/svg/key.svg'

const HomeScThreeUpdated = () => {
  const features = [
    {
      title: "AI-Powered Essay Generation",
      description: "Instantly create well-structured, high-quality essays with the help of advanced natural language processing. The AI understands context, flow, and tone—giving your writing a natural and polished feel.",
      icon: 'svg'
    },
    {
      title: "Topic-Based Writing",
      description: "Just enter your topic or prompt, and the AI will generate a focused, coherent essay tailored to your input. It's like having a writing assistant that understands exactly what you need—instantly and effortlessly.",
      icon: 'svg'
    },
    {
      title: "Plagiarism-Free Content",
      description: "Every essay is 100% original and written from scratch, offering help to write a essay that avoids duplication and maintains academic integrity. You can submit your work confidently, knowing it's unique and credible.",
      icon: 'svg'
    },
    {
      title: "Essay Structure Optimization",
      description: "Our AI follows proper structure: introduction, body, conclusion—ensuring clarity and logical flow. If you're wondering how to write an essay, each section is thoughtfully crafted to support your argument and engage the reader.",
      icon: 'svg'
    },
    {
      title: "Customization Options",
      description: "Choose tone (formal, casual, persuasive), academic level (high school, college, etc.), and word count to suit your specific needs. Just say, 'Write me a narrative essay,' and your essay is truly yours—flexible, personalized, and ready to impress",
      icon: 'svg'
    },
    {
      title: "Privacy-Focused",
      description: "We never store your work or data without permission. Your content is secure and confidential. Your information stays private—because your work should always belong to you.",
      icon: 'svg'
    }
  ];

  return (
    <div className='mx-4 sm:mx-8 md:mx-12 lg:mx-20 my-12 md:my-20'>
         <div id="key-features" className='scroll-mt-25'/> 
      <div className='text-center mb-8 sm:mb-12 md:mb-16'>
        <h2 className="f-18 text-transparent bg-clip-text bg-gradient-to-b from-blue-500 via-blue-300 to-white">
          KEY FEATURES
        </h2>
        <p className='f-40-700 mt-2'>
          What Makes Us Different
        </p>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 justify-items-center'>
        {features.map((feature, index) => (
          <div 
            key={index} 
            className="relative w-full max-w-sm py-8 sm:py-12 px-6 hover:shadow-lg transition-all duration-300 flex flex-col group overflow-hidden"
          >
            {/* Gradient Border */}
            <div className="absolute inset-0 p-[1px] bg-gradient-to-b from-[rgba(0,0,0,1)] to-[rgba(209,209,209,1)]">
              <div className="w-full h-full bg-white"></div>
            </div>
            
            {/* Bubbles for this box */}
            {[...Array(3)].map((_, i) => (
              <div 
                key={i}
                className="bubble"
                style={{
                  top: `${20 + (i * 20)}%`,
                  right: `${5 + (i * 10)}%`,
                  width: `${15 + (i * 5)}px`,
                  height: `${15 + (i * 5)}px`,
                  animationDelay: `${i * 1.5}s`,
                  animationDuration: `${6 + (i * 1)}s`
                }}
              />
            ))}
            
            <div className="relative z-10 flex flex-col h-full">
            <div className='mb-4 sm:mb-6 w-[60px] h-[60px] rounded-[50%] bg-gradient-to-r from-[rgba(2,137,255,1)] to-[rgba(2,88,255,1)] flex justify-center items-center'>
  <Image
    src={Key}
    width={24}
    height={24}
    alt="Feature icon"
  />
</div>

              <div className='flex-1'>
                <h3
                  style={{color:"rgba(29, 100, 216, 1)"}}
                  className='text-lg sm:text-xl font-bold mb-3 sm:mb-4'
                >
                  {feature.title}
                </h3>
                <p
                  style={{color:"rgba(79, 79, 79, 1)"}}
                  className='text-sm sm:text-base leading-relaxed'
                >
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HomeScThreeUpdated
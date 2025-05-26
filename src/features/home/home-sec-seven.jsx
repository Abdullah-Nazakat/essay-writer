import React from 'react'

const HomeSecSeven = () => {
  const faqs = [
    {
      question: "Is the content generated plagiarism-free?",
      answer: "Yes, our AI generates unique content by analyzing multiple sources and creating original text that passes plagiarism checks."
    },
    {
      question: "How does the AI writer work?",
      answer: "Our AI uses advanced natural language processing to understand your input and generate human-like text based on the parameters you provide."
    },
    {
      question: "Can I customize the tone and style of the content?",
      answer: "Absolutely! You can select from various tones (professional, casual, friendly, etc.) and styles to match your brand voice."
    },
    {
      question: "What languages does the AI writer support?",
      answer: "Currently, our primary support is for English, but we're expanding to include other major languages soon."
    },
    {
        question: "Is the content generated plagiarism-free?",
        answer: "Yes, our AI generates unique content by analyzing multiple sources and creating original text that passes plagiarism checks."
      }
  ];

  return (
    <div className='mx-4 sm:mx-8 md:mx-12 lg:mx-20 my-12 md:my-20 flex flex-col gap-[48px]'>
        <div id="faqs" className='scroll-mt-20'/> 
      <div className='flex flex-col gap-[16px] justify-center items-center'>
        <h2 className='f-40-700'>
          Frequently asked questions
        </h2>
        <p style={{fontWeight:"400"}} className='f-18'>
          Here are some common questions about our AI writer
        </p>
      </div>
      
      <div className='overflow-hidden shadow-[rgba(0, 0, 0, 0.15)] '>
        {faqs.map((faq, index) => (
          <React.Fragment key={index}>
            <details className="group transition-all duration-200 ease-in-out bg-white">
              <summary className="list-none p-5 cursor-pointer flex justify-between items-center hover:bg-gray-50">
                <h3 className='font-semibold text-lg'>{faq.question}</h3>
                <svg 
                  className="w-5 h-5 text-gray-500 transition-transform duration-200 rotate-270 group-open:rotate-180" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-5 pb-5 -mt-2 text-gray-600">
                {faq.answer}
              </div>
            </details>
            {/* Show HR after each FAQ except the last one */}
            {index < faqs.length - 1 && (
              <hr className="border-t border-gray-200 group-open:opacity-0" />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

export default HomeSecSeven
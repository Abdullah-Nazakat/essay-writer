import React from 'react'

const HomeFaqs = () => {
    const faqs = [
        {
          question: "How accurate is the content generated?",
          answer: "Our AI is trained on a wide range of academic and professional texts, offering high accuracy in grammar, structure, and tone. Still, we recommend reviewing for subject-specific accuracy."
        },
        {
          question: "Can I edit the AI-generated essay?",
          answer: "Absolutely. All essays are editable and customizable. You can refine tone, structure, and content to suit your personal or academic style."
        },
        {
          question: "Is the content generated plagiarism-free?",
          answer: "Yes. Every essay is generated from scratch to ensure originality. We do not copy from existing sources, and our system is built to avoid duplication."
        },
        {
          question: "What types of essays can I write with this tool?",
          answer: "You can write argumentative, narrative, analytical, persuasive, and even descriptive essays. The tool adapts to various topics and academic levels."
        },
        {
          question: "Can I choose the tone and academic level?",
          answer: "Yes. You can select between formal, casual, persuasive tones and set your preferred academic level—such as high school, college, or professional."
        },
        {
          question: "Does the AI add citations and references?",
          answer: "Yes. You can enable automatic citation generation in common formats like APA, MLA, or Chicago. Always double-check for accuracy and formatting."
        },
        {
          question: "Is there a word limit?",
          answer: "You can set a custom word count for each essay. While there’s no strict limit, longer texts may take slightly more time to generate."
        },
        {
          question: "What is your favorite template from Codejet?",
          answer: "We love templates that blend sleek UI with dynamic animations. Codejet’s clean, minimal dashboard layouts are especially great for modern SaaS apps."
        }
      ];
      

  return (
    <div className='mx-4 sm:mx-8 md:mx-12 lg:mx-20 my-12 md:my-20 flex flex-col gap-[48px]'>
         <div id="faqs" className='scroll-mt-20'/> 
      <div className='flex flex-col gap-[16px] justify-center items-center'>
        <h2 className='f-40-700'>
          Frequently asked questions
        </h2>
        <h3 style={{fontWeight:"400"}} className='f-18'>
          Here are some common questions about our AI writer
        </h3>
      </div>

      <div className='flex flex-col lg:flex-row justify-center items-start gap-0 sm:gap-[48px] container'>
        {/* First Column */}
        <div className='w-full flex flex-col gap-[8px]'>
          {faqs.slice(0, Math.ceil(faqs.length/2)).map((faq, index) => (
            <details 
              key={index} 
              className='border border-[rgba(212,212,216,1)] rounded-lg px-[16px] py-[24px] bg-white text-black group'
            >
              <summary className='list-none cursor-pointer flex justify-between items-center'>
                <h4 className='f-20'>{faq.question}</h4>
                <span className='text-xl transition-transform duration-200'>
                  <span className='group-open:hidden'><svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.5 8C0.5 3.58172 4.08172 0 8.5 0H24.5C28.9183 0 32.5 3.58172 32.5 8V24C32.5 28.4183 28.9183 32 24.5 32H8.5C4.08172 32 0.5 28.4183 0.5 24V8Z" fill="#F4F4F5"/>
<path d="M21.5 15H17.5V11C17.5 10.7348 17.3946 10.4804 17.2071 10.2929C17.0196 10.1054 16.7652 10 16.5 10C16.2348 10 15.9804 10.1054 15.7929 10.2929C15.6054 10.4804 15.5 10.7348 15.5 11V15H11.5C11.2348 15 10.9804 15.1054 10.7929 15.2929C10.6054 15.4804 10.5 15.7348 10.5 16C10.5 16.2652 10.6054 16.5196 10.7929 16.7071C10.9804 16.8946 11.2348 17 11.5 17H15.5V21C15.5 21.2652 15.6054 21.5196 15.7929 21.7071C15.9804 21.8946 16.2348 22 16.5 22C16.7652 22 17.0196 21.8946 17.2071 21.7071C17.3946 21.5196 17.5 21.2652 17.5 21V17H21.5C21.7652 17 22.0196 16.8946 22.2071 16.7071C22.3946 16.5196 22.5 16.2652 22.5 16C22.5 15.7348 22.3946 15.4804 22.2071 15.2929C22.0196 15.1054 21.7652 15 21.5 15Z" fill="#18181B"/>
</svg>
</span>
                  <span className='hidden group-open:inline'><svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.5 8C0.5 3.58172 4.08172 0 8.5 0H24.5C28.9183 0 32.5 3.58172 32.5 8V24C32.5 28.4183 28.9183 32 24.5 32H8.5C4.08172 32 0.5 28.4183 0.5 24V8Z" fill="#F4F4F5"/>
<path d="M22.5 15H10.5V17H22.5V15Z" fill="#18181B"/>
</svg>
</span>
                </span>
              </summary>
              <p style={{color:"rgba(113, 113, 122, 1)"}} className='f-16 mt-3'>{faq.answer}</p>
            </details>
          ))}
        </div>

        {/* Second Column */}
        <div className='w-full flex flex-col gap-[8px]'>
          {faqs.slice(Math.ceil(faqs.length/2)).map((faq, index) => (
            <details 
              key={index} 
              className='border border-[rgba(212,212,216,1)] rounded-lg px-[16px] py-[24px] bg-white text-black group'
            >
              <summary className='list-none cursor-pointer flex justify-between items-center'>
                <h4 className='f-20'>{faq.question}</h4>
                <span className='text-xl transition-transform duration-200'>
                  <span className='group-open:hidden'><svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.5 8C0.5 3.58172 4.08172 0 8.5 0H24.5C28.9183 0 32.5 3.58172 32.5 8V24C32.5 28.4183 28.9183 32 24.5 32H8.5C4.08172 32 0.5 28.4183 0.5 24V8Z" fill="#F4F4F5"/>
<path d="M21.5 15H17.5V11C17.5 10.7348 17.3946 10.4804 17.2071 10.2929C17.0196 10.1054 16.7652 10 16.5 10C16.2348 10 15.9804 10.1054 15.7929 10.2929C15.6054 10.4804 15.5 10.7348 15.5 11V15H11.5C11.2348 15 10.9804 15.1054 10.7929 15.2929C10.6054 15.4804 10.5 15.7348 10.5 16C10.5 16.2652 10.6054 16.5196 10.7929 16.7071C10.9804 16.8946 11.2348 17 11.5 17H15.5V21C15.5 21.2652 15.6054 21.5196 15.7929 21.7071C15.9804 21.8946 16.2348 22 16.5 22C16.7652 22 17.0196 21.8946 17.2071 21.7071C17.3946 21.5196 17.5 21.2652 17.5 21V17H21.5C21.7652 17 22.0196 16.8946 22.2071 16.7071C22.3946 16.5196 22.5 16.2652 22.5 16C22.5 15.7348 22.3946 15.4804 22.2071 15.2929C22.0196 15.1054 21.7652 15 21.5 15Z" fill="#18181B"/>
</svg>
</span>
                  <span className='hidden group-open:inline'><svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.5 8C0.5 3.58172 4.08172 0 8.5 0H24.5C28.9183 0 32.5 3.58172 32.5 8V24C32.5 28.4183 28.9183 32 24.5 32H8.5C4.08172 32 0.5 28.4183 0.5 24V8Z" fill="#F4F4F5"/>
<path d="M22.5 15H10.5V17H22.5V15Z" fill="#18181B"/>
</svg>
</span>
                </span>
              </summary>
              <p style={{color:"rgba(113, 113, 122, 1)"}} className='f-16 mt-3'>{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HomeFaqs
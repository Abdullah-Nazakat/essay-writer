import React from 'react'

const HomeContent = () => {
  return (
    <div
    className='flex absolute w-full top-30 flex-col justify-center text-center gap-[16px] text-white px-5 sm:px-0'
    >
        <div>
        <h1 className='f-40'>
        “Type,Click,Done!Free AI Essay Writer”
        </h1>
        </div>
       
        <div className='f-48 flex flex-wrap justify-center items-center gap-2 italic leading-tight'>
  <span className="whitespace-nowrap">“ AI Essay Writer </span>
  
  <span className="inline-block py-0.5 leading-normal text-transparent bg-clip-text bg-gradient-to-r from-[#2A7AF1] to-[#77A6ED]">
    Free 
  </span>
  
  <span className="inline-block py-0.5 leading-normal text-transparent bg-clip-text bg-gradient-to-r from-[#2A7AF1] via-[#77A6ED] to-[#FCFCFC]">
    No 
  </span>
  
  <span className="inline-flex items-center justify-center p-[0.1em_0.2em] leading-none text-transparent bg-clip-text bg-gradient-to-r from-[#2A7AF1] via-[#77A6ED] to-[#FCFCFC]">
    Signup
  </span>
  ”
</div>

        <div className='f-24 flex flex-col items-center text-center'>
  <div>
    {/* Our AI Essay Writer helps you craft essays quickly and effortlessly, so you can */}
    <span>Essay draft in 10 seconds flat.</span>
  </div>
</div>
    </div>
  )
}

export default HomeContent
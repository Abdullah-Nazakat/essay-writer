'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import Avatar from '@mui/material/Avatar';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import TestImgOne from '../../../public/test-img-1.png';
import TestImgTwo from '../../../public/test-img-2.png';
import TestImgThree from '../../../public/test-img-3.png';
import TestImgFour from '../../../public/test-img-4.png';
import Image from 'next/image';
// import { ChevronLeft, ChevronRight } from '@mui/icons-material';

const testimonials = [
  {
    id: 1,
    name: "Rick Wright",
    role: "University Student",
    quote: "I used to spend hours trying to get started on essays. Now, I just input my topic and get a solid draft in minutes. Total game-changer!",
    image: TestImgOne
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "College Student",
    quote: "This AI essay writer saved me during finals week! I was able to generate three high-quality essays in one night.",
    image: TestImgTwo
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "High School Senior",
    quote: "As someone who struggles with writer's block, this tool has been a game-changer for my college applications.",
    image: TestImgThree
  },
  {
    id: 4,
    name: "Emily Rodriguez",
    role: "Graduate Student",
    quote: "The quality is impressive for a free tool. I use it to draft research paper outlines and save hours of work.",
    image: TestImgFour
  }
];

export default function TestimonialSlider() {
  return (
    <div className="relative">
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        navigation={{
          nextEl: '.testimonial-swiper-button-next',
          prevEl: '.testimonial-swiper-button-prev',
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        breakpoints={{
          640: {
            slidesPerView: 1.5,
            spaceBetween: 24
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 28
          },
          1024: {
            slidesPerView: 2.5,
            spaceBetween: 32
          },
          1280: {
            slidesPerView: 3.2,
            spaceBetween: 34
          }
        }}
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide
            key={testimonial.id}
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.13)",
              padding: "32px 20px",
              borderRadius: "24px",
              position: "relative",
              isolation: "isolate",
            //   minHeight: '400px'
            height:"auto"
            }}
          >
            {/* Gradient Border */}
            <div 
              style={{
                position: "absolute",
                inset: 0,
                padding: "3px",
                borderRadius: "24px",
                background: "linear-gradient(to bottom, rgba(255, 255, 255, 0.77), rgba(255, 255, 255, 0.24))",
                WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                WebkitMaskComposite: "xor",
                maskComposite: "exclude",
                zIndex: -1
              }}
            ></div>

            <div className='flex flex-col gap-4 md:gap-6 h-full'>
              <div className='flex justify-center items-center'>
                <Avatar sx={{ width: 64, height: 64 }} className="md:w-20 md:h-20">
                  <Image 
                    src={testimonial.image} 
                    alt={`${testimonial.name}'s avatar`}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </Avatar>
              </div>
              <div style={{color:"rgba(59, 130, 246, 1)"}} className='text-lg md:text-xl font-bold text-center'>
                {testimonial.name}
                <div style={{color:"rgba(255, 255, 255, 1)"}} className="text-xs md:text-sm font-medium mt-1">
                  {testimonial.role}
                </div>
              </div>
              <div style={{color:"rgba(255, 255, 255, 1)"}} className="text-sm md:text-base font-normal text-center flex-grow flex items-center">
                "{testimonial.quote}"
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation buttons */}
      <div className="flex justify-center gap-4 mt-8">
        <button className="testimonial-swiper-button-prev bg-black hover:bg-blue-600 text-white rounded-full p-2 transition-colors">
        <svg width="12" height="19" viewBox="0 0 12 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.74988 16.9333L2.43988 9.6239L9.74988 2.31445" stroke="white" stroke-width="3.48" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

        </button>
        <button className="testimonial-swiper-button-next bg-black hover:bg-blue-600 text-white rounded-full p-2 transition-colors">
        <svg width="12" height="19" viewBox="0 0 12 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.08005 16.9333L9.39005 9.6239L2.08005 2.31445" stroke="white" stroke-width="3.48" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

        </button>
      </div>
    </div>
  );
}
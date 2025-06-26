import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

export default function Slider() {
  return (
    <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img className='rounded' src='slider-1.webp' alt=''></img></SwiperSlide> 
        <SwiperSlide><img className='rounded-2xl' src='slider-2.webp' alt=''></img></SwiperSlide>
        <SwiperSlide><img className='rounded-2xl' src='slider-3.jpg' alt=''></img></SwiperSlide>
        <SwiperSlide><img className='rounded-2xl' src='slider-4.webp' alt=''></img></SwiperSlide>
        <SwiperSlide><img className='rounded-2xl' src='slider-5.webp' alt=''></img></SwiperSlide>
        
      </Swiper>
  )
}





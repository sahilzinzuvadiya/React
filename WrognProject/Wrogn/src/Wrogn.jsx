import React, { useEffect, useRef } from 'react';

export default function Wrogn() {
    const sliderRef = useRef(null);
      let slideIndex = 0;
    
      useEffect(() => {
        const slider = sliderRef.current;
        const slides = slider.querySelectorAll('.slide');
        const totalSlides = slides.length;
    
        const interval = setInterval(() => {
          slideIndex++;
          slider.style.transition = 'transform 0.5s ease-in-out';
          slider.style.transform = `translateX(-${slideIndex * 100}%)`;
    
          if (slideIndex === totalSlides - 1) {
            
            setTimeout(() => {
              slider.style.transition = 'none';
              slider.style.transform = `translateX(0%)`;
              slideIndex = 0;
            }, 500);
          }
        }, 2000);
    
        return () => clearInterval(interval); 
      }, []);
  return (
    <div className="img-slider mt-24" style={{ overflow: 'hidden', width: '93%',marginLeft:'50px' }}>
      <div className="slider" ref={sliderRef} style={{display: 'flex',transition: 'transform 1.5s ease-in-out',}}>
        <img src="banner-1.webp" className="slide rounded-3xl m-[4px]" alt="" style={{ width: '100%' }} />
        <img src="banner-2.webp" className="slide rounded-3xl m-[4px]" alt="" style={{ width: '100%' }} />
        <img src="banner-3.jpg" className="slide rounded-3xl m-[4px]" alt="" style={{ width: '100%' }} />
        <img src="banner-4.webp" className="slide rounded-3xl m-[4px]" alt="" style={{ width: '100%' }} />
        <img src="banner-5.webp" className="slide rounded-3xl m-[4px]" alt="" style={{ width: '100%' }} />
        {/* Duplicate the first slide at the end */}
        <img src="banner-1.webp" className="slide rounded-3xl m-[4px]" alt="" style={{ width: '100%' }} />
        
      </div>
      {/* <h1 class="text-[70px] font-bold text-[#EE2764] rotate-[-90deg] z-50 relative right-100 bottom-[500px]"><marquee>STAY WROGN STAY MAD</marquee></h1> */}
    </div>
  )
}

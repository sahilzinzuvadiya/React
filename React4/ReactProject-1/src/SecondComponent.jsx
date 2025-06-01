
import React from 'react';

export default function SecondComponent() {
  setTimeout(() => {
    let slides = document.querySelectorAll('.slide');
    let slider = document.getElementById('slider');
    let slideindex = 0;

    setInterval(() => {
      slideindex++;
      if (slideindex >= slides.length) {
        slideindex = 0;
      }
      slider.style.transform = `translateX(-${slideindex * 100}%)`;
    }, 2000);
  }, 0); // Delayed to wait for DOM rendering

  return (
    <div className="img-slider" style={{ overflow: 'hidden', width: '100%' }}>
      <div
        className="slider"
        id="slider"
        style={{
          display: 'flex',
          transition: 'transform 0.5s ease-in-out',
        }}
      >
        <img src="slider-1.jpg" className="slide" alt="" style={{ width: '100%' }} />
        <img src="slider-2.jpg" className="slide" alt="" style={{ width: '100%' }} />
        <img src="slider-3.jpg" className="slide" alt="" style={{ width: '100%' }} />
        <img src="slider-4.jpg" className="slide" alt="" style={{ width: '100%' }} />
        <img src="slider-5.jpg" className="slide" alt="" style={{ width: '100%' }} />
        <img src="slider-6.jpg" className="slide" alt="" style={{ width: '100%' }} />
      </div>
    </div>
  );
}


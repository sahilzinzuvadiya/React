import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const banners = [
  "banner-1.webp",
  "banner-2.webp",
  "banner-3.webp",
  "banner-4.webp",
  "banner-5.webp"
];

export default function Wrogn() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    cssEase: 'ease-in-out',
    pauseOnHover: false
  };

  return (
    <div className="w-[93%] mx-auto mt-24">
      <Slider {...settings}>
        {banners.map((img, index) => (
          <div key={index} className="px-2">
            <img
              src={img}
              alt={`banner-${index + 1}`}
              className="rounded-3xl w-full h-[600px] object-cover"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

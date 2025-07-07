import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const sliderImages = [
  "slider-1.webp",
  "slider-2.webp",
  "slider-3.jpg",
  "slider-4.webp",
  "slider-5.webp",
];

export default function BannerSlider() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    appendDots: (dots) => (
      <div>
        <ul className="flex justify-end relative bottom-8">{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <div className="w-[6px] h-[6px] bg-gray-400 rounded-full hover:bg-black transition" />
    ),
  };

  return (
    <div className="w-full px-4 mt-27">
      <Slider {...settings}>
        {sliderImages.map((img, index) => (
          <div key={index}>
            <img
              src={img}
              alt={`slide-${index}`}
              className="w-full h-[500px] object-cover rounded-2xl"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}




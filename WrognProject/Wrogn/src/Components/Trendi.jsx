import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data = [
  {
    img: `big-img_1.jpg`,
    detail: `Tonal AOP`,
    price: `|₹959`,
    desc: `Oversized T-...`
  },
  {
    img: `big-img_2.webp`,
    detail: `Embroidered`,
    price: `|₹839`,
    desc: `Oversized Fit T-...`
  },
  {
    img: `big-img_3.webp`,
    detail: `Puff Print`,
    price: `|₹839`,
    desc: `Oversized T-...`
  },
  {
    img: `big-img_1.jpg`,
    detail: `Tonal AOP`,
    price: `|₹959`,
    desc: `Oversized T-...`
  },
  {
    img: `big-img_2.webp`,
    detail: `Embroidered`,
    price: `|₹839`,
    desc: `Oversized Fit T-...`
  },
  {
    img: `big-img_3.webp`,
    detail: `Puff Print`,
    price: `|₹839`,
    desc: `Oversized T-...`
  }
]

export default function Trendi() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  return (
    <div className="relative h-[860px]">
      {/* Big Image */}
      <img className="w-[90%] h-[750px] rounded-3xl mx-auto object-cover mt-10" src="big-img.webp" alt="" />

      {/* SHOP ALL */}
      <h6 className="absolute top-[360px] right-[100px] text-white font-semibold text-sm cursor-pointer z-10">
        SHOP ALL
      </h6>

      {/* Slider */}
      <div className="absolute bottom-[150px] right-[7%] w-[45%] z-20">
        <Slider {...settings}>
          {data.map((e, index) => (
            
              <div className="w-[220px] h-[300px] shadow-md overflow-hidden">
                <img
                  src={e.img}
                  alt=""
                  className="w-full h-[230px] ml-3 object-cover"
                />
                <div className="pl-4 pt-3 text-white text-[15px]">
                  <h6 className="font-semibold">
                    {e.detail} <span className="ml-10 text-[#2E953E]">{e.price}</span>
                  </h6>
                  <p className="text-white text-[15px]">{e.desc}</p>
                </div>
              </div>
            
          ))}
        </Slider>
      </div>
    </div>
  );
}






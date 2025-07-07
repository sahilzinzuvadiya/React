import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const products = [
  {
    id: 1,
    title: "Solid Stretch Slim Fit Shirt | Navy",
    image: "https://wrogn.com/cdn/shop/files/1_92b0a01a-7483-4cd2-b4dd-3de89cb156c3.jpg?v=1749127210&width=360",
    price: 1439,
    originalPrice: 2399,
    tag: "EXCLUSIVE",
  },
  {
    id: 2,
    title: "Solid Stretch Slim Fit Shirt | Blue",
    image: "https://wrogn.com/cdn/shop/files/1_22770138-d500-46cd-a547-564e14747619.jpg?v=1749127284&width=360",
    price: 1439,
    originalPrice: 2399,
    tag: "EXCLUSIVE",
  },
  {
    id: 3,
    title: "Solid Stretch Cotton Blend Shirt | Black",
    image: "https://wrogn.com/cdn/shop/files/1_374f0826-8747-49be-b905-1202a1e7802e.jpg?v=1749127532&width=360",
    price: 1799,
    originalPrice: 2999,
    tag: "EXCLUSIVE",
  },
  {
    id: 4,
    title: "Solid Stretch Cotton Blend Shirt | Pink",
    image: "https://wrogn.com/cdn/shop/files/1_56912672-25ee-4257-80ae-e25a58b31850.jpg?v=1749127372&width=360",
    price: 1799,
    originalPrice: 2999,
    tag: "EXCLUSIVE",
  },
  {
    id: 5,
    title: "Solid Stretch Cotton Blend Shirt | Navy",
    image: "https://wrogn.com/cdn/shop/files/1_264f2564-279e-46ff-985f-4e4bbaaf4102.jpg?v=1749127497&width=360",
    price: 1799,
    originalPrice: 2999,
    tag: "EXCLUSIVE",
  },
  {
    id: 6,
    title: "Silver Foil Print Slim Fit T-Shirt | Rust",
    image: "https://wrogn.com/cdn/shop/files/1_110e6c61-01c4-470d-a742-5127a0b27940.jpg?v=1749128408&width=360",
    price: 899,
    originalPrice: 899,
    tag: "NEW",
  },
];
const PrevArrow = ({ onClick }) => (
  <div
    onClick={onClick}
    className="!left-[-5px] z-10 w-[40px] h-[50px] flex items-center justify-center 
               bg-gray-200 hover:bg-gray-300 transition-colors duration-200 
               rounded-xl absolute top-40 -translate-y-1/2 cursor-pointer text-3xl"
  >
    ‹
  </div>
);

const NextArrow = ({ onClick }) => (
  <div
    onClick={onClick}
    className="!right-[-5px] z-10 w-[40px] h-[50px] flex items-center justify-center 
               bg-gray-200 hover:bg-gray-300 transition-colors duration-200 
               rounded-xl absolute top-40 -translate-y-1/2 cursor-pointer text-3xl"
  >
    ›
  </div>
);

export default function Season() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 2.5 } },
      { breakpoint: 640, settings: { slidesToShow: 1.5 } },
    ],
  };

  return (
    <div className="bg-white py-10 space-y-10">
      <h2 className="text-center font-bold text-2xl">VIRAT HAS A MESSAGE FOR YOU</h2>

      {/* Video */}
      <div className="max-w-7xl mx-auto px-4">
        <video
          className="w-full h-[600px] object-cover rounded-3xl"
          autoPlay
          muted
          loop
          controls
        >
          <source src="video.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Slider */}
      <div className="max-w-7xl mx-auto px-4 mt-10">
        <h3 className="text-center font-bold text-2xl mb-6">SEASON'S TOP PICKS</h3>
        <Slider {...settings}>
          {products.map((product) => (
            <div key={product.id} className="px-2">
              <div className="bg-white rounded-xl shadow p-2">
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-[280px] object-cover rounded-xl"
                  />
                  {product.tag && (
                    <span className="absolute top-2 left-2 bg-pink-600 text-white text-xs px-2 py-1 rounded font-semibold">
                      {product.tag}
                    </span>
                  )}
                </div>
                <div className="mt-2 space-y-1 px-1">
                  <p className="text-sm font-bold">
                    ₹{product.price.toLocaleString()}{" "}
                    <span className="line-through text-gray-400 text-xs">
                      ₹{product.originalPrice.toLocaleString()}
                    </span>{" "}
                    <span className="text-green-600 text-xs font-semibold">(40% OFF)</span>
                  </p>
                  <p className="text-xs text-gray-700">{product.title}</p>
                  <button className="w-full h-[40px] font-bold mt-2 border border-black text-sm py-1 rounded hover:bg-black hover:text-white transition">
                    Add to Bag
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

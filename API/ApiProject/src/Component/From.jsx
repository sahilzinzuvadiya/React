import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


export default function From() {
    const [formdata, setFormdata] = useState({
        name: "",
        desc: "",
        price: "",
        
    });
    const [img, setImg] = useState({})
    
    const handleChange = (e) => {
        const image=URL.createObjectURL(img)
        setFormdata({
            img:image,
            ...formdata,
            [e.target.name]: e.target.value,
        });
    };

    const handlesubmit = () => {
        const postdata = async () => {
            await axios.post("http://localhost:1006/users", formdata).then((res) => {
                console.log(res.data);

            })
        }
        postdata()
    };

    return (
        
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-white via-emerald-50 to-white px-4">
  <div className="w-[400px] bg-white rounded-3xl shadow-xl p-6 border border-emerald-200 transition-all duration-500 hover:shadow-2xl">
    
    <h2 className="text-2xl font-bold text-emerald-600 text-center mb-5 animate-fade-in">
      Add New Product
    </h2>

    {/* File Upload */}
    <input
      onChange={(e) => setImg(e.target.files[0])}
      name="image"
      type="file"
      className="mb-4 block w-full text-sm text-gray-600
        file:mr-4 file:py-2 file:px-4
        file:rounded-full file:border-0
        file:text-sm file:font-semibold
        file:bg-emerald-100 file:text-emerald-700
        hover:file:bg-emerald-200
        transition duration-300 ease-in-out"
    />

    {/* Name */}
    <input
      onChange={handleChange}
      name="name"
      value={formdata.name}
      type="text"
      placeholder="Enter product name"
      className="border w-full h-[45px] rounded-full px-4 mb-4 focus:border-emerald-500 focus:outline-none transition duration-300 shadow-sm"
    />

    {/* Description */}
    <input
      onChange={handleChange}
      name="desc"
      value={formdata.desc}
      type="text"
      placeholder="Enter product description"
      className="border w-full h-[45px] rounded-full px-4 mb-4 focus:border-emerald-500 focus:outline-none transition duration-300 shadow-sm"
    />

    {/* Price */}
    <input
      onChange={handleChange}
      name="price"
      value={formdata.price}
      type="text"
      placeholder="Enter product price"
      className="border w-full h-[45px] rounded-full px-4 mb-6 focus:border-emerald-500 focus:outline-none transition duration-300 shadow-sm"
    />

    {/* Submit Button */}
    <Link to={"/"}>
      <button
        onClick={handlesubmit}
        className="relative w-full h-11 rounded-full text-white bg-emerald-600 overflow-hidden group transition-all ease-in-out duration-300 hover:shadow-md hover:ring-2 hover:ring-offset-2 hover:ring-emerald-400"
      >
        <span className="absolute right-0 w-8 h-32 -mt-12 transform translate-x-12 bg-white opacity-10 rotate-12 transition-all duration-1000 group-hover:-translate-x-40 ease"></span>
        <span className="relative z-10 font-semibold">Add Card</span>
      </button>
    </Link>
  </div>
</div>

    );
}

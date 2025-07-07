import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function SignUp() {
  const [focused, setFocused] = useState({
    name: false,
    email: false,
    password: false,
  });
  const navigate = useNavigate()
  const handleClick = () => {
    navigate("/")
  }
  const [formdata, setFormdata] = useState({})
  const handleChange = (e) => {
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value
    })
  }


  const btnClick = () => {
    let obj = { id: Date.now(), ...formdata }
    let data = JSON.parse(localStorage.getItem("Form")) || []
    const newdata = [...data, obj]
    localStorage.setItem("Form", JSON.stringify(newdata))
    Swal.fire({
      title: "success",
      text: "Successfully!,You are signup",
      icon: "success"
    });
    navigate("/signin")

    setFormdata({
      name: "",
      email: "",
      password: ""
    })
  }
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md transition-all duration-300 hover:shadow-2xl">
        {/* <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Create Account</h2>
         */}
        <img className='w-[50px] h-[50px] ml-40 mb-6' src='logo.svg' alt=''></img>
        <h1 className='absolute top-[110px] left-[882px] hover:cursor-pointer' onClick={handleClick}><i class="fa-solid fa-xmark"></i></h1>

        {/* Name Field */}
        <div className="relative mb-5">
          <input
            type="text"
            id="name"
            name='name'
            value={formdata.name}
            className="peer w-full px-4 pt-6 pb-2 text-sm border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500"
            onFocus={() => setFocused({ ...focused, name: true })}
            onBlur={(e) => setFocused({ ...focused, name: e.target.value !== '' })}
            onChange={handleChange}
          />
          <label
            htmlFor="name"
            className={`absolute left-4 top-2 text-gray-500 text-sm transition-all duration-300 ${focused.name ? 'text-xs -top-2 bg-white px-1' : 'top-4'
              } peer-focus:text-xs peer-focus:-top-2 peer-focus:bg-white peer-focus:px-1`}
          >
            Full Name
          </label>
        </div>

        {/* Email Field */}
        <div className="relative mb-5">
          <input
            type="email"
            id="email"
            name='email'
            value={formdata.email}
            className="peer w-full px-4 pt-6 pb-2 text-sm border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500"
            onFocus={() => setFocused({ ...focused, email: true })}
            onBlur={(e) => setFocused({ ...focused, email: e.target.value !== '' })}
            onChange={handleChange}
          />
          <label
            htmlFor="email"
            className={`absolute left-4 top-2 text-gray-500 text-sm transition-all duration-300 ${focused.email ? 'text-xs -top-2 bg-white px-1' : 'top-4'
              } peer-focus:text-xs peer-focus:-top-2 peer-focus:bg-white peer-focus:px-1`}
          >
            Email
          </label>
        </div>

        {/* Password Field */}
        <div className="relative mb-5">
          <input
            type="password"
            id="password"
            name='password'
            value={formdata.password}
            className="peer w-full px-4 pt-6 pb-2 text-sm border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500"
            onFocus={() => setFocused({ ...focused, password: true })}
            onBlur={(e) => setFocused({ ...focused, password: e.target.value !== '' })}
            onChange={handleChange}
          />
          <label
            htmlFor="password"
            className={`absolute left-4 top-2 text-gray-500 text-sm transition-all duration-300 ${focused.password ? 'text-xs -top-2 bg-white px-1' : 'top-4'
              } peer-focus:text-xs peer-focus:-top-2 peer-focus:bg-white peer-focus:px-1`}
          >
            Password
          </label>
        </div>

        {/* Submit Button */}
        <button onClick={btnClick} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-xl transition duration-300">
          Sign Up
        </button>

        <p className="mt-4 text-center text-sm text-gray-500">
          Already have an account? <Link to={"/signin"} className="text-blue-600 hover:underline">Sign In</Link>
        </p>
      </div>
    </div>
  );
}

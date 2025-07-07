import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function SignIn() {
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  localStorage.setItem("auth", JSON.stringify(false))
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
    let data = JSON.parse(localStorage.getItem("Form"))
    let datafind = data.find((item) => item.email == formdata.email)
    // console.log(datafind);
    if (!datafind) {
      navigate("/signup")
      alert("data is wrogn")
      return
    }
    if (datafind.password == formdata.password) {
      localStorage.setItem("auth", JSON.stringify(true))
      navigate("/")
    }

  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md transition-all duration-300 hover:shadow-2xl">
        {/* <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Sign In</h2> */}
        <img className='w-[50px] h-[50px] ml-40 mb-6' src='logo.svg' alt=''></img>
        <p className='absolute top-[143px] left-[880px] hover:cursor-pointer' onClick={handleClick}><i class="fa-solid fa-xmark"></i></p>

        {/* Email Input */}
        <div className="relative mb-6">
          <input
            type="email"
            id="email"
            name='email'
            onChange={handleChange}
            className="peer w-full px-4 pt-6 pb-2 text-sm border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500"
            onFocus={() => setEmailFocused(true)}
            onBlur={(e) => setEmailFocused(e.target.value !== '')}
          />
          <label
            htmlFor="email"
            className={`absolute left-4 top-2 text-gray-500 text-sm transition-all duration-300 ${emailFocused ? 'text-xs -top-2 bg-white px-1' : 'top-4'
              } peer-focus:text-xs peer-focus:-top-2 peer-focus:bg-white peer-focus:px-1`}
          >
            Email
          </label>
        </div>

        {/* Password Input */}
        <div className="relative mb-6">
          <input
            type="password"
            id="password"
            name='password'
            onChange={handleChange}
            className="peer w-full px-4 pt-6 pb-2 text-sm border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500"
            onFocus={() => setPasswordFocused(true)}
            onBlur={(e) => setPasswordFocused(e.target.value !== '')}
          />
          <label
            htmlFor="password"
            className={`absolute left-4 top-2 text-gray-500 text-sm transition-all duration-300 ${passwordFocused ? 'text-xs -top-2 bg-white px-1' : 'top-4'
              } peer-focus:text-xs peer-focus:-top-2 peer-focus:bg-white peer-focus:px-1`}
          >
            Password
          </label>
        </div>

        {/* Submit Button */}
        <button onClick={btnClick} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-xl transition duration-300">
          Sign In
        </button>

        <p className="mt-4 text-center text-sm text-gray-500">
          Don't have an account? <Link to={"/signup"} className="text-blue-600 hover:underline">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}



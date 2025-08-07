import { createUserWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { auth, db } from '../../FirebaseConfige'
import { doc, setDoc } from 'firebase/firestore'
import { Link, useNavigate } from 'react-router-dom'
import { Eye, EyeOff } from 'lucide-react'

export default function SignUp({ theme }) {
  const [email, setEmail] = useState("")
  const [password, setPasssword] = useState("")
  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  const [showPassword, setshowPassword] = useState()
  const navigate = useNavigate()

  const handleSignUp = async () => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password)
      await setDoc(doc(db, "Users", res.user.uid), { name, age, email })
      navigate("/login")
    } catch (error) {
      alert("Signup failed. Please check your details.")
    }
  }

  const GoogleAuth = async () => {
      await signInWithPopup(auth, provider).then((res) => {
        console.log(res);
  
      })
    }

  return (
    <div className={theme === 'light'
      ? "h-154 pt-2 flex items-center justify-center bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 px-4"
      : "h-154 pt-2 flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white px-4"
    }>

      {/* <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8 backdrop-blur-md animate-fade-in"> */}
      <div
        className={
          theme === 'light'
            ? "w-full h-148 max-w-md bg-white shadow-xl rounded-2xl p-8 backdrop-blur-md animate-fade-in transition-all duration-500"
            : "w-full h-148 max-w-md bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white border border-gray-700 shadow-xl rounded-2xl p-8 backdrop-blur-md animate-fade-in transition-all duration-500"
        }
      >

        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-4">Create Account</h2>

        {/* Name */}
        <div className="relative mb-6">
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="peer w-full border-b-2 border-gray-300 focus:border-indigo-600 outline-none bg-transparent pt-6 pb-2 placeholder-transparent"
            placeholder="Full Name"
          />
          <label
            htmlFor="name"
            className="absolute left-0 top-2 text-gray-500 text-sm peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-indigo-600 transition-all"
          >
            Full Name
          </label>
        </div>

        {/* Age */}
        <div className="relative mb-6">
          <input
            type="number"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="peer w-full border-b-2 border-gray-300 focus:border-indigo-600 outline-none bg-transparent pt-6 pb-2 placeholder-transparent"
            placeholder="Age"
          />
          <label
            htmlFor="age"
            className="absolute left-0 top-2 text-gray-500 text-sm peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-indigo-600 transition-all"
          >
            Age
          </label>
        </div>

        {/* Email */}
        <div className="relative mb-6">
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="peer w-full border-b-2 border-gray-300 focus:border-indigo-600 outline-none bg-transparent pt-6 pb-2 placeholder-transparent"
            placeholder="Email"
          />
          <label
            htmlFor="email"
            className="absolute left-0 top-2 text-gray-500 text-sm peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-indigo-600 transition-all"
          >
            Email Address
          </label>
        </div>

        {/* Password */}
        <div className="relative mb-8">
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            value={password}
            onChange={(e) => setPasssword(e.target.value)}
            className="peer w-full border-b-2 border-gray-300 focus:border-indigo-600 outline-none bg-transparent pt-6 pb-2 placeholder-transparent"
            placeholder="Password"
          />
          <label
            htmlFor="password"
            className="absolute left-0 top-2 text-gray-500 text-sm peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-indigo-600 transition-all"
          >
            Password
          </label>
          <button
            type="button"
            onClick={() => setshowPassword(prev => !prev)}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-800"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>

        <button
          onClick={handleSignUp}
          className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition duration-300 shadow-sm"
        >
          Sign Up
        </button>

        <button
          onClick={GoogleAuth}
          className="w-full mt-4 flex items-center justify-center gap-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-white py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition duration-300"
        >
          <img
            src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
            alt="Google"
            className="w-5 h-5"
          />
          <span className="font-medium">Sign in with Google</span>
        </button>


        <p className="text-sm text-center text-gray-600 mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-indigo-600 hover:underline font-medium">
            SignIn
          </Link>
        </p>
      </div>
    </div>
  )
}


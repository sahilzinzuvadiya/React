import { signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../../FirebaseConfige'
import { Eye, EyeOff } from 'lucide-react'

export default function Login({ theme }) {
  const [email, setEmail] = useState("")
  const [password, setPasssword] = useState("")
  const [showPassword, setshowPassword] = useState()
  const navigate = useNavigate()


  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password)
      navigate("/dashboard")
    } catch (error) {
      alert("Login failed. Check your email or password.")
    }
  }

  const GoogleAuth = async () => {
    await signInWithPopup(auth, provider).then((res) => {
      console.log(res);

    })
  }

  return (
    <div className={theme === 'light'
      ? "h-144 pb-5 flex items-center justify-center bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 px-4"
      : "h-144 pb-5 flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white px-4"
    }>
      <div
        className={
          theme === 'light'
            ? "w-full max-w-md bg-white shadow-xl rounded-2xl p-8 backdrop-blur-md animate-fade-in transition-all duration-500"
            : "w-full max-w-md bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white border border-gray-700 shadow-xl rounded-2xl p-8 backdrop-blur-md animate-fade-in transition-all duration-500"
        }
      >
        <h2 className="text-2xl font-bold text-center text-indigo-7001` mb-8">Login</h2>

        <div className="relative mb-6">
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="peer w-full border-b-2 border-gray-300 focus:border-indigo-600 outline-none bg-transparent pt-6 pb-2 transition-all"
            placeholder=" "
          />
          <label
            htmlFor="email"
            className="absolute left-0 top-2 text-gray-500 text-sm peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-indigo-600 transition-all"
          >
            Email Address
          </label>
        </div>

        <div className="relative mb-8">
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            value={password}
            onChange={(e) => setPasssword(e.target.value)}
            className="peer w-full border-b-2 border-gray-300 focus:border-indigo-600 outline-none bg-transparent pt-6 pb-2 transition-all"
            placeholder=" "
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
          onClick={handleLogin}
          className="w-full bg-indigo-600 font-semibold text-white py-3 rounded-lg hover:bg-indigo-700 transition duration-300"
        >
          Login
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
          Don’t have an account?{" "}
          <Link to="/" className="text-indigo-600 hover:underline font-medium">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  )
}

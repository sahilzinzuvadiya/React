import { signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../../FirebaseConfige'

export default function Login({theme}) {
    const [email, setEmail] = useState("")
    const [password, setPasssword] = useState("")
    const navigate=useNavigate()
    const handleLogin=async()=>{
        await signInWithEmailAndPassword(auth,email,password).then((res)=>{
            console.log(res);
        })
        navigate("/dashboard")
    }
    return (
        
  <div className={
    theme === 'light'
      ? 'h-144 w-full flex items-center justify-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 px-4'
      : 'h-144 w-full flex items-center justify-center bg-black text-white px-4'
  }>
  <div className={
    theme === 'light'
      ? 'w-full max-w-md p-8 bg-white text-black rounded-2xl shadow-xl transition-all duration-300 hover:shadow-2xl'
      : 'w-full max-w-md p-8 bg-gray-900 text-white rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl'
  }>
    <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Login</h2>

    <div className="space-y-4">
      <input
        type="email"
        placeholder="Enter your Email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 transition duration-300"
      />

      <input
        type="password"
        placeholder="Enter your Password"
        onChange={(e) => setPasssword(e.target.value)}
        value={password}
        className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 transition duration-300"
      />

      <button
        onClick={handleLogin}
        className="w-full bg-purple-600 text-white py-3 rounded-xl hover:bg-purple-700 transition duration-300 font-semibold text-lg"
      >
        Sign In
      </button>

      <p className="text-center text-gray-600 mt-4">
        Don’t have an account?
        <Link to="/" className="text-purple-600 hover:underline ml-1 transition">
          Sign Up
        </Link>
      </p>
    </div>
  </div>
</div>

    )
}

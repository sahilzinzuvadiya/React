import { createUserWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import {auth} from '../../FirebaseConfige'
import { db } from '../../FirebaseConfige' 
import { Link, useNavigate } from 'react-router-dom'
import { doc, setDoc } from 'firebase/firestore'

export default function SignUp({theme}) {
    const [email,setEmail]=useState("")
    const [password,setPasssword]=useState("")
    const [name,setName]=useState("")
    const [age,setAge]=useState("")
    const navigate=useNavigate()

    const handleClick= async ()=>{
        await createUserWithEmailAndPassword(auth,email,password).then((res)=>{
            setDoc(doc(db,"Users",res.user.uid),{
              name,age,email
            })
            navigate("/login")
        })
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
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Create Account</h2>

      <div className="space-y-4">
        <input
          type="text"
          placeholder="Enter your Name"
          onChange={(e) => setName(e.target.value)}
          value={name}
          className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 transition duration-300"
        />

        <input
          type="text"
          placeholder="Enter your Age"
          onChange={(e) => setAge(e.target.value)}
          value={age}
          className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 transition duration-300"
        />

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
          onClick={handleClick}
          className="w-full bg-purple-600 text-white py-3 rounded-xl hover:bg-purple-700 transition duration-300 font-semibold text-lg"
        >
          Sign Up
        </button>

        <p className="text-center text-gray-600 mt-4">
          Already have an account?
          <Link to="/login" className="text-purple-600 hover:underline ml-1 transition">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  </div>
  )
}

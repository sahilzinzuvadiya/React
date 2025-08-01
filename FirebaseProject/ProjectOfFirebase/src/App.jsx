import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Firebase/Login'
import Dashboard from './Firebase/Dashboard'
import SignUp from './Firebase/SignUp'
import Navbar from './Firebase/Navbar'

export default function App() {
  const [theme,setTheme]=useState('light')
  return (
    <BrowserRouter>
      
        <div>
          <Navbar theme={theme} setTheme={setTheme}/>
        <Routes>
          <Route path="/" element={<SignUp theme={theme} />} />
          <Route path="/login" element={<Login theme={theme}/>} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        </div>
    </BrowserRouter>
  )
}

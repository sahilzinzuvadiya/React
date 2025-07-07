import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar';
import Slider from './Components/Slider';
import Wear from './Components/Wear';
import Season from './Components/Season';
import Tranding from './Components/Tranding';
import Trendi from './Components/Trendi';
import Seller from './Components/Seller';
import Wrogn from './Components/Wrogn';
import Wallpaper from './Components/Wallpaper';
import WrognStore from './Components/WrognStore';
import Footer from './Components/Footer';
import { Route, Routes, useNavigate } from 'react-router-dom'
import SignIn from './RouterUsingForm/SignIn'
import SignUp from './RouterUsingForm/SignUp'
import React from 'react'

export function HomePage() {
  const navigate = useNavigate()
  useEffect(() => {
    let getdata = JSON.parse(localStorage.getItem("auth"))
    if (getdata == false) {
      navigate("/signin")
    }
  }, [])
  return (
    <div>
      <Navbar />
      <Slider />
      <Wear />
      <Season />
      <Tranding />
      <Trendi />
      <Seller />
      <Wrogn />
      <Wallpaper />
      <WrognStore />
      <Footer />
    </div>
  );
}

export default function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

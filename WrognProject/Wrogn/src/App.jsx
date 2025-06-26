import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar'
import Slider from './Slider'
import Wear from './Wear'
import Season from './Season'
import Tranding from './Tranding'
import Trendi from './Trendi'
import Seller from './Seller'
import Wrogn from './Wrogn'
import Wallpaper from './Wallpaper'
import WrognStore from './WrognStore'
import Footer from './Footer'
import SignIn from './SignIn'
import SignUp from './SignUp'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar></Navbar>
      <Slider></Slider>
      <Wear></Wear>
      <Season></Season>
      <Tranding></Tranding>
      <Trendi></Trendi>
      <Seller></Seller>
      <Wrogn></Wrogn>
      <Wallpaper></Wallpaper>
      <WrognStore></WrognStore>
      <Footer></Footer>
      <SignIn></SignIn>
      <SignUp></SignUp>
    </div>
  )
}

export default App

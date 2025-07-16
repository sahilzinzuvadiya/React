import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Component/Navbar'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import From from './Component/From'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Navbar/> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navbar/>}></Route>
          <Route path='/form' element={<From/>}></Route>
        </Routes>
      </BrowserRouter>
    </>

  )
}

export default App

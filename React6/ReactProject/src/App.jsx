import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar'
import Card from './Card'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Navbar></Navbar>      
      <Card></Card>
    </>
  )
}

export default App

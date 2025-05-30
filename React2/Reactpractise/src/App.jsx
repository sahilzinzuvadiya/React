import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FirstComponent from './FirstComponent'
import Card from './Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    
      <div>
        <FirstComponent></FirstComponent>
        <Card></Card>
    </div>
  )
}

export default App

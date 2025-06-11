import React, { useState } from 'react'

export default function Counter() {

    const [count,setCount]=useState(0);

    const handleclick=()=>{
        setCount(count+1);
    }
    const handleclick1=()=>{
        setCount(count-1);
    }
    const handleclick2=()=>{
        setCount(0);
    }

  return (
    <div>
    <h1>Counter</h1>
      <h1>{count}</h1>
      <button onClick={handleclick}>click(+)</button><br></br>
      <button onClick={handleclick1}>click(-)</button><br></br>
      <button onClick={handleclick2}>Reset</button>
    </div>
  )
}

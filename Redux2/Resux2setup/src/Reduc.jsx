import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './Feature/CounterSlice'

export default function Reduc() {
    const dispstch=useDispatch()


    const count=useSelector((state)=>{
        return state.counter.count
    })
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>dispstch(increment())}>+</button>
        <button onClick={()=>dispstch(decrement())}>-</button>
    </div>
  )
}

import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addData, deleteData, updateData } from './Feature/Slice'

export default function Crude() {
    const [name,setName]=useState("")
    const [subject,setSubject]=useState("")
    const [editIndex,setEditIndex]=useState(null)

    const dispatch=useDispatch()

    const data=useSelector((state)=>{
        return state.crudekey.data
    })

    const handleData=()=>{
        if(editIndex==null){
            let obj={id:Date.now(),name,subject}
            dispatch(addData(obj))
        }
        else{
            dispatch(updateData({id:editIndex,name,subject}))
        }
        setName("")
        setSubject("")
    }

    const handleDelete=(id)=>{
        dispatch(deleteData(id))
    }



    const handleEdit=(id)=>{
        let Edit=data.find((item)=>item.id==id)
        setName(Edit.name)
        setSubject(Edit.subject)
        setEditIndex(id)
    }
  return (
    <div>
      <input type='text' placeholder='Enter your name' value={name} onChange={(e)=>setName(e.target.value)}></input>
      <input type='text' placeholder='Enter your Subject' value={subject} onChange={(e)=>setSubject(e.target.value)}></input>
      <button onClick={handleData}>{editIndex==null?"Add Data":"UpdateData"}</button>

      {
        data &&
        data.map((e,i)=>{
            return <ul key={i}>
                <li>{i+1}</li>
                <li>{e.name}</li>
                <li>{e.subject}</li>
                <button onClick={()=>handleDelete(e.id)}>Delete</button>
                <button onClick={()=>handleEdit(e.id)}>Edit</button>
            </ul>
        })
      }
    </div>
  )
}

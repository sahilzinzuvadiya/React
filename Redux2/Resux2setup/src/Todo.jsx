import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addData, deleteData, updateData } from './Feature/TodoSlice'

export default function Todo() {
  const [name,setName]=useState("")
  const [subject,setSubject]=useState("")
  const [editIndex,seteditIndex]=useState(null)

  const dispatch=useDispatch()

  const data=useSelector((state)=>{
    return state.Todokey.data
  })

  const handledata=()=>{
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

  const deletedata=(id)=>{
      dispatch(deleteData(id))
  }

  const editData=(id)=>{
    let edit=data.find((item)=>item.id==id)
    // console.log(edit);
    setName(edit.name)
    setSubject(edit.subject)
    seteditIndex(id)
  }
  return (
    <div>
      <input type='text' placeholder='Enter your name' onChange={(e)=>setName(e.target.value)} value={name}></input>
      <input type='text' placeholder='Enter your subject' onChange={(e)=>setSubject(e.target.value)} value={subject}></input>
      <button onClick={handledata}>{editIndex==null?"Add data":"Upadate"}</button>

      {
        data &&
        data.map((e,i)=>{
          return <ul key={i}>
            <li>{i+1}</li>
            <li>{e.name}</li>
            <li>{e.subject}</li>
            <button onClick={()=>deletedata(e.id)}>Delete</button>
            <button onClick={()=>editData(e.id)}>Edit</button>
          </ul>
        })
      }
    </div>
  )
}

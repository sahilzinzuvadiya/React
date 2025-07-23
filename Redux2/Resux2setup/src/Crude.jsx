import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AddData, DeleteData, PostData, UpdateData } from './Feature/CrudeSlice'

export default function Crude() {

    const [name, setName] = useState("")
    const [subject, setSubject] = useState("")
    const [editIndex,seteditIndex]=useState(null)

    useEffect(() => {
        dispatch(AddData());
    }, []);

    const dispatch = useDispatch()

    const record = useSelector((state) => {
        return state.crudekey.data
    })

    const handledata = () => {
        if(editIndex==null){
            let obj = { id: Date.now(), name, subject }
            dispatch(PostData(obj))
        }
        else{
            dispatch(UpdateData({id:editIndex,name,subject}))
        }

        setName("")
        setSubject("")
        seteditIndex(null)
    }

    const handleDelet=(id)=>{
        // console.log(id);
        dispatch(DeleteData(id))
    }

    const handleEdit=(id)=>{
        let putdata=record.find((item)=>item.id==id)
        setName(putdata.name)
        setSubject(putdata.subject)
        seteditIndex(id)
    }
    return (
        <div>
            <input type='text' placeholder='Enter your name' onChange={(e) => setName(e.target.value)} value={name}></input>
            <input type='text' placeholder='Enter your subject' onChange={(e) => setSubject(e.target.value)} value={subject}></input>
            <button onClick={handledata}>{editIndex==null?"Add data":"Update"}</button>
            {
                record &&
                record.map((e, i) => {
                    return <ul key={i}>
                        <li>{i + 1}</li>
                        <li>{e.name}</li>
                        <li>{e.subject}</li>
                        <button onClick={()=>handleDelet(e.id)}>Delete</button>
                        <button onClick={()=>handleEdit(e.id)}>Edit</button>
                    </ul>
                })
            }
        </div>
    )
}

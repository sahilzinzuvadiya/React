import { createSlice } from "@reduxjs/toolkit";


export const Slice=createSlice({
    name:"Slice",
    initialState:{data:[]},
    reducers:{
        addData:(state,action)=>{
            state.data.push(action.payload)
        },
        deleteData:(state,acton)=>{
            let datafilter=state.data.filter((item)=>item.id!=acton.payload)
            state.data=datafilter
        },
        updateData:(state,action)=>{
            console.log(action.payload);
            let singleData=state.data.find((item)=>item.id==action.payload.id)
            singleData.name=action.payload.name
            singleData.subject=action.payload.subject
        }
    }
})
export const {addData,deleteData,updateData}=Slice.actions
export default Slice.reducer
import { createSlice } from "@reduxjs/toolkit";

export const CounterSlice=createSlice({
    name:"CounterSlice",
    initialState:{count:0},
    reducers:{
        increment:((state,action)=>{
            state.count+=1
        }),
        decrement:((state,action)=>{
            state.count-=1
        })
    }
})
export const {increment,decrement}=CounterSlice.actions
export default CounterSlice.reducer
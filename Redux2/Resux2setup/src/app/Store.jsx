import {configureStore} from '@reduxjs/toolkit'
import  CounterSlice  from '../Feature/CounterSlice'
import TodoSlice  from '../Feature/TodoSlice'
import  ApiSlice  from '../Feature/ApiSlice'
import  CrudeSlice  from '../Feature/CrudeSlice'

export const store=configureStore({
    reducer:{
        counter:CounterSlice,
        Todokey:TodoSlice,
        apikey:ApiSlice,
        crudekey:CrudeSlice
    }
})


import {configureStore} from '@reduxjs/toolkit'
import  CounterSlice  from '../Feature/CounterSlice'
import TodoSlice  from '../Feature/TodoSlice'

export const store=configureStore({
    reducer:{
        counter:CounterSlice,
        Todokey:TodoSlice
    }
})


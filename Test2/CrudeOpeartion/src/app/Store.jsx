import {configureStore} from "@reduxjs/toolkit"
import  Slice  from "../Feature/Slice"

export const store=configureStore({
    reducer:{
        crudekey:Slice
    }
})
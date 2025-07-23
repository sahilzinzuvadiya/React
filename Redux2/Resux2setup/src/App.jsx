import { useState } from 'react'
import {Provider} from 'react-redux'
import { store } from './app/Store'
import Reduc from './Reduc'
import Todo from './Todo'
import Api from './Api'
import Crude from './Crude'

function App() {
  

  return (
    <>
      <Provider store={store}>
        {/* <Reduc/> */}
        {/* <Todo/> */}
        {/* <Api/> */}
        <Crude/>
      </Provider>
    </>
  )
}

export default App

import { useState } from 'react'
import {Provider} from 'react-redux'
import { store } from './app/Store'
import Reduc from './Reduc'
import Todo from './Todo'

function App() {
  

  return (
    <>
      <Provider store={store}>
        {/* <Reduc/> */}
        <Todo/>
      </Provider>
    </>
  )
}

export default App

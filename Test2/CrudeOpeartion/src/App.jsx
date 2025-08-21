import React from 'react'
import {Provider} from 'react-redux'
import Crude from './Crude'
import { store } from './app/Store'

export default function App() {
  return (
    <div>
      <Provider store={store}>
          <Crude/>
      </Provider>
    </div>
  )
}

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FetchApi } from './Feature/ApiSlice'
import { PacmanLoader } from 'react-spinners'
export default function Api() {
  
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(FetchApi())
  }, [])

  const record = useSelector((state) => state.apikey)

  if (record.loading == true) {
    return <PacmanLoader color="#2fc598"/>
  }

  return (
    <div>
      {record.data.map((e, i) => (
        <ul key={i}>
          <li>{e.title}</li>
        </ul>
      ))}
    </div>
  )
}



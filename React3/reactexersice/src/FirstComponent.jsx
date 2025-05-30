import React from 'react'

export default function FirstComponent({id,name,age}) {
  return (
    <div>
             <ul>
                    <li>{id}</li>
                    <li>{name}</li>
                    <li>{age}</li>
                </ul>
     </div>
  )
}

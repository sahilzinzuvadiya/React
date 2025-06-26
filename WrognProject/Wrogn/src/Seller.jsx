import React from 'react'

export default function Seller() {
  return (
    <div>
      <p className='text-center text-xl font-bold'>BEST SELLERS</p>
      <div className='flex gap-4 justify-center mt-5'>
        <img className='w-[295px] h-[400px] rounded-2xl' src='checked.webp' alt=''></img>
        <img className='w-[295px] h-[400px] rounded-2xl' src='printed.webp' alt=''></img>
        <img className='w-[295px] h-[400px] rounded-2xl' src='cargo.webp' alt=''></img>
        <img className='w-[295px] h-[400px] rounded-2xl' src='slim.webp' alt=''></img>
      </div>
    </div>
  )
}

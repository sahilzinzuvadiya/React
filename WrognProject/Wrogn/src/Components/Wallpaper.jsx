import React from 'react'

export default function Wallpaper() {
  return (
    <div>
        <h1 className='text-center mt-25 text-xl font-bold'>WROGN WALLPAPERS</h1>
      <div className='flex gap-4 justify-center mt-5'>
        <img className='h-[450px] w-[300px] rounded-xl' src='wally1.webp' alt=''></img>
        <img className='h-[450px] w-[300px] rounded-xl' src='wally2.webp' alt=''></img>
        <img className='h-[450px] w-[300px] rounded-xl' src='wally3.webp' alt=''></img>
      </div>
    </div>
  )
}

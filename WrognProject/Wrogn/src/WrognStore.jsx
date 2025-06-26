import React from 'react'

export default function WrognStore() {
  return (
    <div>
        <div className='flex mt-20 justify-center gap-4'>
            <div className='w-[45%] h-[300px] pl-14 pt-7'>
                <h1 className='text-[32px]'>WROGN STORE.</h1>
                <h1 className='text-[52px] font-bold mt-1'>RIGHT PLACE.</h1>
                <h5 className='text-[#565A62] text-xl font-semibold mt-1'>Find how close you’re to going 
                    <br></br>wrogn!</h5>
                    <button className='bg-[#161601] w-[290px] h-[45px] text-white font-semibold text-xl rounded-[10px] mt-5 '>See All Stores</button>
            </div>
            <div className='border-2 w-[45%] h-[300px] rounded-2xl'>
                <img className='w-full h-[300px] rounded-2xl' src='Big.webp' alt=''></img>
            </div>
        </div>
        <div className='flex justify-center mt-8 gap-4'>
            <div className='w-[45%] h-[350px] border-2 rounded-2xl'>
                <img className='w-full h-[350px] rounded-2xl' src='Big.webp' alt=''></img>
            </div>
            <div className='w-[22%] h-[350px] border-2 rounded-2xl'>
                <img className='w-full h-[350px] rounded-2xl' src='small2.webp' alt=''></img>
            </div>
            <div className='w-[22%] h-[350px] border-2 rounded-2xl'>
                <img className='w-full h-[350px] rounded-2xl' src='small1.webp' alt=''></img>
            </div>
        </div>
    </div>
  )
}

import React from 'react'

export default function Trendi() {
  return (
    <div>
      <div className='h-[860px]'>
        <img className='mt-25 ml-18 w-[90%] h-[750px] rounded-3xl' src='big-img.webp' alt=''></img>
        <div className='flex gap-4 w-[45%] h-[240px] relative bottom-[340px] left-[665px]'>
          <h6 className='relative bottom-12 left-125 w-[110px] h-[25px] text-white font-semibold hover:cursor-pointer'>SHOP ALL</h6>
            <div>
                <img className='w-[220px] h-[235px] rounded-xl hover:cursor-pointer' src='big-img_1.jpg' alt=''></img>
                <h6 className='text-[11px] relative top-[-220px] w-[66px] h-[18px] pl-1.5 pt-[1px] bg-[#EE2764] text-white font-semibold rounded-md'>EXCLUSIVE</h6>
                <h6 className='text-white relative bottom-2 left-0.5 hover:cursor-pointer'>Tonal AOP<span className='ml-11'>|₹959</span></h6>
                <h6 className='text-white relative bottom-2 left-0.5 hover:cursor-pointer'>Oversized T-...</h6>
            </div>
            <div>
                <img className='w-[220px] h-[235px] rounded-xl hover:cursor-pointer' src='big-img_2.webp' alt=''></img>
                <h6 className='text-[11px] relative top-[-220px] w-[66px] h-[18px] pl-1.5 pt-[1px] bg-[#EE2764] text-white font-semibold rounded-md'>EXCLUSIVE</h6>
                <h6 className='text-white relative bottom-2 left-0.5 hover:cursor-pointer'>Embroidered<span className='ml-6'>|₹839</span></h6>
                <h6 className='text-white relative bottom-2 left-0.5 hover:cursor-pointer'>Oversized Fit T-...</h6>
            </div>
            <div>
                <img className='w-[220px] h-[235px] rounded-xl hover:cursor-pointer' src='big-img_3.webp' alt=''></img>
                <h6 className='text-[11px] relative top-[-220px] w-[66px] h-[18px] pl-1.5 pt-[1px] bg-[#EE2764] text-white font-semibold rounded-md'>EXCLUSIVE</h6> 
                <h6 className='text-white relative bottom-2 left-0.5 hover:cursor-pointer'>Puff Print<span className='ml-11'>|₹839</span></h6>
                <h6 className='text-white relative bottom-2 left-0.5 hover:cursor-pointer'>Oversized T-...</h6>
            </div>
        </div>
      </div>
    </div>
  )
}





import React from 'react'

export default function Tranding() {
    return (
        <div>
            <p className='text-center mt-25 text-xl font-bold'>TRENDING CATEGORIES</p>
            <div className='flex gap-4 justify-center mt-5'>
                <div>
                    <img className='w-[100%] h-[370px] rounded-2xl' src='polo.webp' alt=''></img>
                </div>
                <div>
                    <img className='w-[100%] h-[370px] rounded-2xl' src='half.webp' alt=''></img>
                </div>
            </div>

            <div className='flex gap-4 justify-center mt-4'>
                <div>
                    <img className='w-[100%] h-[390px] rounded-2xl' src='full.webp' alt=''></img>
                </div>
                <div>
                    <img className='w-[100%] h-[390px] rounded-2xl' src='OVERSIZED.webp' alt=''></img>
                </div>
                <div>
                    <img className='w-[100%] h-[390px] rounded-2xl' src='DENIMS.webp' alt=''></img>
                </div>      
            </div>
        </div>
    )
}

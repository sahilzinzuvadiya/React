import React from 'react'

export default function Footer() {
    return (
        <div>
            <img className='mt-20' src='footer-img.webp' alt=''></img>
            <div className='bg-[#161601] w-full h-[550px] flex justify-between'>
                <div className='w-[35%] h-[420px] ml-25 mt-10'>
                    <img className='w-[90px] h-[90px]' src='footer-logo.webp' alt=''></img>
                    <h1 className='text-[#A5A8AC] text-5xl font-bold leading-15'>FOR THE<br></br> RIGHT<br></br>KIND OF MAN.</h1>
                    <h1 className='text-[#A5A8AC] text-xl font-semibold mt-4'>© 2024, Wrogn Powered by TMRW</h1>
                    <div className='flex gap-3 mt-10'>
                        <img className='hover:cursor-pointer' src='Instagram.svg' alt=''></img>
                        <img className='hover:cursor-pointer' src='Facebook.svg' alt=''></img>
                        <img className='hover:cursor-pointer' src='Twitter.png' alt=''></img>
                        <img className='hover:cursor-pointer' src='Pinterest.svg' alt=''></img>
                        <img className='hover:cursor-pointer' src='Youtube.png' alt=''></img>
                    </div>
                </div>
                <div className='w-[18%] h-[300px] mt-20'>
                    <h6 className='text-white font-semibold'>HELP</h6>
                    <h6 className='text-[#A5A8AC] font-semibold mt-6 hover:border-b-1 w-[80px] border-white hover:text-white'>My Account</h6>
                    <h6 className='text-[#A5A8AC] font-semibold mt-5 hover:border-b-1 w-[87px] border-white hover:text-white'>Privacy Policy</h6>
                    <h6 className='text-[#A5A8AC] font-semibold mt-5 hover:border-b-1 w-[142px] border-white hover:text-white'>Anti Corruption Policy</h6>
                    <h6 className='text-[#A5A8AC] font-semibold mt-5 hover:border-b-1 w-[125px] border-white hover:text-white'>Terms & Conditions</h6>    
                    <h6 className='text-[#A5A8AC] font-semibold mt-5 hover:border-b-1 w-[70px] border-white hover:text-white'>Contact Us</h6>
                </div>
                <div className='w-[18%] h-[300px] mt-20'>
                    <h6 className='text-white font-semibold'>ORDER SUPPORT</h6>
                    <h6 className='text-[#A5A8AC] font-semibold mt-6 hover:border-b-1 w-[150px] border-white hover:text-white'>Return & Refund Policy</h6>
                    <h6 className='text-[#A5A8AC] font-semibold mt-5 hover:border-b-1 w-[30px] border-white hover:text-white'>FAQ</h6>
                    <h6 className='text-[#A5A8AC] font-semibold mt-5 hover:border-b-1 w-[100px] border-white hover:text-white'>Shipping Policy</h6>
                    <h6 className='text-[#A5A8AC] font-semibold mt-5 hover:border-b-1 w-[80px] border-white hover:text-white'>Cancellation</h6>
                </div>
                <div className='w-[18%] h-[300px] mt-20'>
                    <h6 className='text-white font-semibold'>ABOUT US</h6>
                    <h6 className='text-[#A5A8AC] font-semibold mt-6 hover:border-b-1 w-[60px] border-white hover:text-white'>About Us</h6>
                    <h6 className='text-[#A5A8AC] font-semibold mt-6 hover:border-b-1 w-[80px] border-white hover:text-white'>Find a Store</h6>
                    <h6 className='text-[#A5A8AC] font-semibold mt-6 hover:border-b-1 w-[30px] border-white hover:text-white'>Blog</h6>
                    <h6 className='text-[#A5A8AC] font-semibold mt-6 hover:border-b-1 w-[50px] border-white hover:text-white'>Careers</h6>

                </div>
            </div>
        </div>
    )
}



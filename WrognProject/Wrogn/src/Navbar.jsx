import React from 'react'

export default function Navbar() {
  return (
    <div>
      <div className='fixed top-0 left-0 z-50 bg-black w-[100%] h-[30px]'>
         <div className='marquee'>
            <span className='text-white text-[13px] font-semibold'>END OF SEASON SALE- UPTO 50% OFF</span>
            <span className='ml-10 text-white text-[13px] font-semibold'>END OF SEASON SALE- UPTO 50% OFF</span>
            <span className='ml-10 text-white text-[13px] font-semibold'>END OF SEASON SALE- UPTO 50% OFF</span>
            <span className='ml-10 text-white text-[13px] font-semibold'>END OF SEASON SALE- UPTO 50% OFF</span>
            <span className='ml-10 text-white text-[13px] font-semibold'>END OF SEASON SALE- UPTO 50% OFF</span>
            <span className='ml-10 text-white text-[13px] font-semibold'>END OF SEASON SALE- UPTO 50% OFF</span>
            <span className='ml-10 text-white text-[13px] font-semibold'>END OF SEASON SALE- UPTO 50% OFF</span>
            <span className='ml-10 text-white text-[13px] font-semibold'>END OF SEASON SALE- UPTO 50% OFF</span>
            <span className='ml-10 text-white text-[13px] font-semibold'>END OF SEASON SALE- UPTO 50% OFF</span>
            <span className='ml-10 text-white text-[13px] font-semibold'>END OF SEASON SALE- UPTO 50% OFF</span>
            {/* <span className='ml-10 text-white text-[13px] font-semibold'>END OF SEASON SALE- UPTO 50% OFF</span> */}
            {/* <span className='ml-10 text-white text-[13px] font-semibold'>END OF SEASON SALE- UPTO 50% OFF</span> */}
          </div> 
      </div>
        
      
      {/* navbar */}
      <div className='fixed top-[28px] w-full h-[70px] flex justify-between bg-white shadow-md z-50'>
        <div className='ml-[50px] '>
          <img className='w-[45px] mt-4 hover:cursor-pointer' src='logo.svg' alt=''></img>
        </div>
        <div className='flex gap-8 text-[14px] font-bold justify-center items-center ml-8'>
          <a href='#'>EOSS</a>
          <a href='#'>EXCLUSIVE</a>
          <div className='group z-50 h-[70px] flex items-center'>
            <a href='#'>ALL PRODUCT</a>
            <div className='bg-white absolute top-[71px] left-[300px] w-[420px] h-[420px] justify-center items-center rounded-3xl hidden group-hover:flex'>
              <div className='text-sm/11'>
                <a href='#' className='hover:text-[#EE2764]'>VIEW ALL</a><br></br>
                <a href='#' className='hover:text-[#EE2764]'>SPRING SUMMER 25</a><br></br>
                <a href='#' className='hover:text-[#EE2764]'>BESTSELLERS</a><br></br>
                <a href='#' className='hover:text-[#EE2764]'>FRESH ARRIVALS</a><br></br>
                <a href='#' className='hover:text-[#EE2764]'>SHIRT</a><br></br>
                <a href='#' className='hover:text-[#EE2764]'>TSHIRTS</a><br></br>
                <a href='#' className='hover:text-[#EE2764]'>JEANS</a><br></br>
                <a href='#' className='hover:text-[#EE2764]'>CARGOS & JOGGERS</a><br></br>
              </div>
              <div className='text-sm/11 ml-12'>
                <a href='#' className='hover:text-[#EE2764]'>SWEATSHIRTS</a><br></br>
                <a href='#' className='hover:text-[#EE2764]'>JACKETS</a><br></br>
                <a href='#' className='hover:text-[#EE2764]'>SWEATERS</a><br></br>
                <a href='#' className='hover:text-[#EE2764]'>SHORTS</a><br></br>
                <a href='#' className='hover:text-[#EE2764]'>POLOS</a><br></br>
                <a href='#' className='hover:text-[#EE2764]'>ESSENTIAL</a><br></br>
                <a href='#' className='hover:text-[#EE2764]'>FOOTWEAR</a><br></br>
              </div>
            </div>
          </div>

          <div className='group z-50 h-[70px] flex items-center'>
            <a href='#'>TOPWEAR</a>
            <div className='bg-white absolute top-[71px] left-[420px] w-[370px] h-[300px] justify-center items-center rounded-3xl hidden group-hover:flex'>
              <div className='text-sm/11'>
                <a href='#' className='hover:text-[#EE2764]'>VIEW ALL</a><br></br>
                {/* <a href='#' className='hover:text-[#EE2764]'>SPRING SUMMER 25</a><br></br> */}
                <a href='#' className='hover:text-[#EE2764]'>BESTSELLERS</a><br></br>
                <a href='#' className='hover:text-[#EE2764]'>FRESH ARRIVALS</a><br></br>
                <a href='#' className='hover:text-[#EE2764]'>SHIRT</a><br></br>
                <a href='#' className='hover:text-[#EE2764]'>TSHIRTS</a><br></br>
                {/* <a href='#' className='hover:text-[#EE2764]'>JEANS</a><br></br> */}
                {/* <a href='#' className='hover:text-[#EE2764]'>CARGOS & JOGGERS</a><br></br> */}
              </div>
              <div className='text-sm/11 ml-12'>
                <a href='#' className='hover:text-[#EE2764]'>POLOS</a><br></br>
                <a href='#' className='hover:text-[#EE2764]'>JACKETS</a><br></br>
                <a href='#' className='hover:text-[#EE2764]'>SWEATSHIRTS</a><br></br>
                <a href='#' className='hover:text-[#EE2764]'>SWEATERS</a><br></br>
                {/* <a href='#' className='hover:text-[#EE2764]'>SHORTS</a><br></br> */}
                {/* <a href='#' className='hover:text-[#EE2764]'>ESSENTIAL</a><br></br> */}
                {/* <a href='#' className='hover:text-[#EE2764]'>FOOTWEAR</a><br></br> */}
              </div>
            </div>
          </div>

          <div className='group z-50 h-[70px] flex items-center'>
            <a href='#'>BOTTOMWEAR</a>
            <div className='bg-white absolute top-[71px] left-[530px] w-[380px] h-[230px] justify-center items-center rounded-3xl hidden group-hover:flex'>
              <div className='text-sm/11'>
                <a href='#' className='hover:text-[#EE2764]'>VIEW ALL</a><br></br>
                {/* <a href='#' className='hover:text-[#EE2764]'>SPRING SUMMER 25</a><br></br> */}
                <a href='#' className='hover:text-[#EE2764]'>BESTSELLERS</a><br></br>
                <a href='#' className='hover:text-[#EE2764]'>FRESH ARRIVALS</a><br></br>
                {/* <a href='#' className='hover:text-[#EE2764]'>SHIRT</a><br></br> */}
                {/* <a href='#' className='hover:text-[#EE2764]'>TSHIRTS</a><br></br> */}
              </div>
              <div className='text-sm/11 ml-12'>
                <a href='#' className='hover:text-[#EE2764]'>JEANS</a><br></br>
                <a href='#' className='hover:text-[#EE2764]'>CARGOS & JOGGERS</a><br></br>
                <a href='#' className='hover:text-[#EE2764]'>SHORTS</a><br></br>
                {/* <a href='#' className='hover:text-[#EE2764]'>POLOS</a><br></br> */}
                {/* <a href='#' className='hover:text-[#EE2764]'>JACKETS</a><br></br> */}
                {/* <a href='#' className='hover:text-[#EE2764]'>SWEATSHIRTS</a><br></br> */}
                {/* <a href='#' className='hover:text-[#EE2764]'>SWEATERS</a><br></br> */}
                {/* <a href='#' className='hover:text-[#EE2764]'>ESSENTIAL</a><br></br> */}
                {/* <a href='#' className='hover:text-[#EE2764]'>FOOTWEAR</a><br></br> */}
              </div>
            </div>
          </div>

          <div className='group z-50 h-[70px] flex items-center'>
            <a href='#'>FOOTWEAR</a>
            <div className='bg-white absolute top-[71px] left-[650px] w-[270px] h-[155px] justify-center items-center rounded-3xl hidden group-hover:flex'>
              <div className='text-sm/11'>
                <a href='#' className='hover:text-[#EE2764]'>VIEW ALL</a><br></br>
                {/* <a href='#' className='hover:text-[#EE2764]'>SPRING SUMMER 25</a><br></br> */}
                <a href='#' className='hover:text-[#EE2764]'>SNEAKERS</a><br></br>
                {/* <a href='#' className='hover:text-[#EE2764]'>FRESH ARRIVALS</a><br></br> */}
                {/* <a href='#' className='hover:text-[#EE2764]'>SHIRT</a><br></br> */}
                {/* <a href='#' className='hover:text-[#EE2764]'>TSHIRTS</a><br></br> */}
                {/* <a href='#' className='hover:text-[#EE2764]'>JEANS</a><br></br> */}
                {/* <a href='#' className='hover:text-[#EE2764]'>CARGOS & JOGGERS</a><br></br> */}
              </div>
              <div className='text-sm/11 ml-12'>
                <a href='#' className='hover:text-[#EE2764]'>SLIDERS</a><br></br>
                <a href='#' className='hover:text-[#EE2764]'>ATHLEISURE</a><br></br>
                {/* <a href='#' className='hover:text-[#EE2764]'>SWEATSHIRTS</a><br></br> */}
                {/* <a href='#' className='hover:text-[#EE2764]'>SWEATERS</a><br></br> */}
                {/* <a href='#' className='hover:text-[#EE2764]'>SHORTS</a><br></br> */}
                {/* <a href='#' className='hover:text-[#EE2764]'>ESSENTIAL</a><br></br> */}
                {/* <a href='#' className='hover:text-[#EE2764]'>FOOTWEAR</a><br></br> */}
              </div>
            </div>
          </div>
          <div className='group z-50 h-[70px] flex items-center'>

            <a href='#'>FRESH ARRIVALS</a>
            <div className='bg-white absolute top-[71px] left-[760px] w-[250px] h-[180px] justify-center items-center rounded-3xl hidden group-hover:flex'>
              <div className='text-sm/11'>
                {/* <a href='#' className='hover:text-[#EE2764]'>VIEW ALL</a><br></br> */}
                {/* <a href='#' className='hover:text-[#EE2764]'>SPRING SUMMER 25</a><br></br> */}
                {/* <a href='#' className='hover:text-[#EE2764]'>BESTSELLERS</a><br></br> */}
                {/* <a href='#' className='hover:text-[#EE2764]'>FRESH ARRIVALS</a><br></br> */}
                <a href='#' className='hover:text-[#EE2764]'>SHIRT</a><br></br>
                <a href='#' className='hover:text-[#EE2764]'>TSHIRTS</a><br></br>
                <a href='#' className='hover:text-[#EE2764]'>JEANS</a><br></br>
              </div>
              <div className='text-sm/11 ml-12'>
                <a href='#' className='hover:text-[#EE2764]'>POLOS</a><br></br>
                <a href='#' className='hover:text-[#EE2764]'>CARGOS</a><br></br>
                {/* <a href='#' className='hover:text-[#EE2764]'>JACKETS</a><br></br> */}
                {/* <a href='#' className='hover:text-[#EE2764]'>SWEATSHIRTS</a><br></br> */}
                {/* <a href='#' className='hover:text-[#EE2764]'>SWEATERS</a><br></br> */}
                {/* <a href='#' className='hover:text-[#EE2764]'>SHORTS</a><br></br> */}
                {/* <a href='#' className='hover:text-[#EE2764]'>ESSENTIAL</a><br></br> */}
                {/* <a href='#' className='hover:text-[#EE2764]'>FOOTWEAR</a><br></br> */}
              </div>
            </div>
          </div>
          <div className='group z-50 h-[70px] flex items-center'>

            <a href='#'>ESSENTIAL</a>
            <div className='bg-white absolute top-[71px] left-[915px] w-[250px] h-[200px] justify-center items-center rounded-3xl hidden group-hover:flex'>
              <div className='text-sm/11'>
                <a href='#' className='hover:text-[#EE2764]'>VIEW ALL</a><br></br>
                {/* <a href='#' className='hover:text-[#EE2764]'>SPRING SUMMER 25</a><br></br> */}
                <a href='#' className='hover:text-[#EE2764]'>PERFUME</a><br></br>
                <a href='#' className='hover:text-[#EE2764]'>CAPS</a><br></br>
                {/* <a href='#' className='hover:text-[#EE2764]'>SHIRT</a><br></br> */}
                {/* <a href='#' className='hover:text-[#EE2764]'>TSHIRTS</a><br></br> */}
                {/* <a href='#' className='hover:text-[#EE2764]'>JEANS</a><br></br> */}
                {/* <a href='#' className='hover:text-[#EE2764]'>CARGOS & JOGGERS</a><br></br> */}
              </div>
              <div className='text-sm/11 ml-12'>
                <a href='#' className='hover:text-[#EE2764]'>SOCKS</a><br></br>
                <a href='#' className='hover:text-[#EE2764]'>TRUNKS</a><br></br>
                <a href='#' className='hover:text-[#EE2764]'>BRIEFS</a><br></br>
                {/* <a href='#' className='hover:text-[#EE2764]'>SWEATERS</a><br></br> */}
                {/* <a href='#' className='hover:text-[#EE2764]'>SHORTS</a><br></br> */}
                {/* <a href='#' className='hover:text-[#EE2764]'>ESSENTIAL</a><br></br> */}
                {/* <a href='#' className='hover:text-[#EE2764]'>FOOTWEAR</a><br></br> */}
              </div>
            </div>
          </div>
        </div>
        <div className='border-[1px] border-gray-300 w-[150px] h-[40px] flex mt-3.5 ml-12 rounded-md'>
          <i class="fa-solid fa-magnifying-glass pl-4 pt-3 text-[14px]"></i><input className='w-[120px] h-[40px] pl-3 text-[14px] font-semibold border-none' type='text' placeholder='SEARCH'></input>
        </div>
        <div className='flex gap-6 text-[22px] ml-7 mt-5 mr-[50px]'>
          <div className='group z-50 h-[50px]'>
          <i class="fa-regular fa-user hover:cursor-pointer"></i>
            <div className='bg-white absolute top-[71px] left-[78%] w-[250px] h-[330px] p-8 rounded-3xl hidden group-hover:block'>
                <p className='text-[14px] text-gray-400'>PROFILE</p>
                <p className='flex text-[15px]'><i class="fa-regular fa-user mt-4"></i><p className='ml-3 mt-3 font-semibold text-[14px] hover:text-[#934c93]'>ACCOUNT</p></p>
                <p className='flex text-[15px]'><i class="fa-solid fa-bag-shopping mt-5"></i><p className='ml-3 mt-3 font-semibold text-[14px] hover:text-[#934c93]'>ORDERS</p></p>
                <p className='flex text-[15px]'><i class="fa-solid fa-store mt-5"></i><p className='mt-3 ml-3 font-semibold text-[14px] hover:text-[#934c93]'>FIND STORES</p></p>
                <button className='text-[16px] mt-6 border-2 border-black w-full h-[45px] rounded-2xl font-semibold hover:cursor-pointer'>SIGN IN</button><br></br>
                <button className='text-[16px] mt-4 border-2 border-black w-full h-[45px] rounded-2xl font-semibold hover:cursor-pointer'>SIGN UP</button>
            </div>
          </div>
          <i class="fa-solid fa-bag-shopping mt-1 hover:cursor-pointer"></i>
        </div>
      </div>
    </div>
  )
}

import React from 'react'

export default function Navbar() {
  return (

       <div class='navbar'>
        <img style={{height:"30px",width:'170px',marginLeft:"140px",marginTop:"10px"}} src='logo.svg' alt=''></img>
        <div class='menu'>
            <a href='#'>MEN</a>
            <a href='#'>WOMEN</a>
            <a href='#'>MOBILE COVERS</a>
        </div>
        <div class='searchbar'>
            <i class="fa-solid fa-magnifying-glass"></i>    
            <input type='text' placeholder='Search by products'></input>
        </div>
        <div class='login'>
            <p style={{borderRight:"2px solid #EAEAEA",height:"22px",marginTop:"10px"}}></p>
            <h4 style={{marginTop:"10px"}}>LOGIN</h4>
            <i style={{marginTop:"10px"}} class="fa-regular fa-heart"></i>
            <i style={{marginTop:"10px"}} class="fa-solid fa-bag-shopping"></i>
        </div>
      </div>


  )
}

import React from 'react'

export default function FourthComponent() {
  return (
    <div class='footer'>
      <div class='footerboxes'>
        <div class='box_1'>
            <h2 style={{color:'white'}}>About Us</h2>
            <h3 style={{color:'white',marginTop:'25px',fontWeight:'400',lineHeight:'25px'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do<br></br> eiusmod tempor incididunt ut labore dolore magna aliqua.</h3>
            <h3 style={{color:'white',marginTop:'25px',fontWeight:'400',lineHeight:'25px'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do<br></br> eiusmod tempor incididunt ut labore dolore magna aliqua.</h3>
        </div>
        <div class='box_2'>
            <h2 style={{color:'white'}}>Newsletter</h2>
             <h3 style={{color:'white',marginTop:'25px',fontWeight:'400',lineHeight:'25px'}}>Stay update with our latest</h3>
             <input type='text' placeholder='Enter Email'></input><i class="fa-solid fa-arrow-right-long"></i>
        </div>
        <div class='box_3'>
        <h2 style={{color:'white'}}>Follow Us</h2>
        <h3 style={{color:'white',marginTop:'25px',fontWeight:'400',lineHeight:'25px'}}>Let us be social</h3>
        <i style={{marginLeft:'0'}} class="fa-brands fa-facebook-f"></i>
        <i class="fa-brands fa-twitter"></i>
        <i class="fa-solid fa-basketball"></i>
        
        </div>
      </div>
    </div>
  )
}

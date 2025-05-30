import React from 'react'

export default function ThirdComponent() {
  return (
    <div class='mainsec'>
      <h1 style={{textAlign:"center",marginTop:"100px"}}>What kind of Coffee we serve for you</h1>
      <h5 style={{textAlign:"center",marginTop:"10px",color:"#777777",fontSize:"15px",fontWeight:"500"}}>Who are in extremely love with eco friendly system.</h5>
      <div class='images'>  
        <img style={{height:"270px"}} src='g1.jpg.webp' alt=''></img>
        <img style={{height:"370px"}} src='g3.jpg.webp' alt=''></img>
      </div>
      <div class='images2'>  
        <img style={{position:'relative',bottom:'100px',width:"350px",height:'350px'}} src='g2.jpg.webp' alt=''></img>
        <img style={{height:'250px',width:'320px'}} src='g4.jpg.webp' alt=''></img>
        <img style={{height:'250px',width:'320px'}} src='g5.jpg.webp'alt=''></img>
      </div>
    </div>
  )
}

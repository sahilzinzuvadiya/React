import React from 'react'

export default function FirstComponent() {

  return (
    <div class="navbar">
      <div class="logo">
        <img src="./logo.png" alt=""></img>
      </div>
      <div class="menu">
        <a href="#" class="all">All</a>
        <a href="#" id="men">Men</a>
        <a href="#" id="women">Women</a>
        <a href="#" id="electric">Electric</a>
      </div>
      <div class="search">
        <i class="fa-solid fa-magnifying-glass"></i>
        <input type="text" placeholder="Search prouducts,brands and more"></input>
      </div>
      <div class="profile">
        <i class="fa-regular fa-user"></i>
        <h5>Profile</h5>
      </div>
      <div class="whishlist">
        <i class="fa-regular fa-heart"></i>
        <h5>Whishlist</h5>
      </div>
      <div class="bag">
        <a href="cart.html"><i class="fa-solid fa-bag-shopping"></i></a>
        <h5>Bag</h5>
      </div>
    </div>
  
  )
}

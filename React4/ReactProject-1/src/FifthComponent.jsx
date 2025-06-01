import React from 'react'

export default function FifthComponent() {
  return (
    <div>
       <footer className="footer">

      <div className="footer-columns">
        {/* Column 1 - Shop */}
        <div className="footer-col">
            <img style={{width:"200px",position:'relative',bottom:"35px"}} src='footerlogo.svg' alt=''></img>
          <h4 style={{position:'relative',bottom:'25px'}}>Shop</h4>
          <ul>
            <li style={{position:'relative',bottom:'25px'}}><a href="#">Men</a></li>
            <li style={{position:'relative',bottom:'25px'}}><a href="#">Women</a></li>
            <li style={{position:'relative',bottom:'25px'}}><a href="#">Accessories</a></li>
            <li style={{position:'relative',bottom:'25px'}}><a href="#">Mobile Covers</a></li>
          </ul>
        </div>

        {/* Column 2 - About */}
        <div className="footer-col">
          <h4>About</h4>
          <ul>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Track Order</a></li>
            <li><a href="#">Return Policy</a></li>
            <li><a href="#">Terms of Use</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </div>

        {/* Column 3 - Connect with Us */}
        <div className="footer-col">
          <h4>Connect With Us</h4>
          <div className="social-icons">
            <i class="fa-brands fa-square-facebook"></i>
            <i class="fa-brands fa-square-twitter"></i>
            <i class="fa-brands fa-square-instagram"></i>
            <i class="fa-brands fa-square-youtube"></i>
          </div>
          <h4 style={{marginTop:'20px'}}>100% SECURE PAYMENT</h4>
          <div class='payment'>
            <img src='payment-1.jpeg' alt=''></img>
            <img src='payment-2.jpeg' alt=''></img>
            <img src='payment-3.jpeg' alt=''></img>
            <img src='payment-4.jpeg' alt=''></img>
            <img src='payment-5.jpeg' alt=''></img>
          </div>
        </div>

        {/* Column 4 - App Download */}
        <div className="footer-col">
          <h4>Download Our App</h4>
          <div className="app-buttons">
            <a href="#"><img src="app_android_v1.webp" alt="Google Play" /></a>
            <a href="#"><img src="app_ios_v1.webp" alt="App Store" /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Bewakoof Clone. All Rights Reserved.</p>
      </div>
    </footer>
  

    </div>
  )
}

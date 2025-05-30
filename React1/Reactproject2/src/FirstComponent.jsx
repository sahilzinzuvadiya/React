import React from 'react'

export default function FirstComponent() {
    return (

        <div class='headerimg'>
            <div class='navbar'>
                <img src='logo.png.webp' alt=''></img>
                <div class='menu'>
                    <a href='#'>HOME</a>
                    <a href='#'>ABOUT</a>
                    <a href='#'>COFFEE</a>
                    <a href='#'>REVIEW</a>
                    <a href='#'>BLOG</a>
                    <a href='#'>PAGES</a><span><i class="fa-solid fa-chevron-down"></i></span>
                </div>
            </div>
            <div class='content'>
                    <h5>Now you can feel the Energy</h5>
                    <h1>Start your day with<br></br>a black Coffee</h1>
                    <button>BUY NOW</button>
            </div>
        </div>

    )
}

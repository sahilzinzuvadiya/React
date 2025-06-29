import React from 'react'

export default function Card() {
  const obj = [
    {
      "id": 1,
      "title": "Fjallraven Bag",
      "price": 19.95,
      "description": "Your perfect pack for everyday use and walks in the forest....",
      "category": "men's clothing",
      "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      "rating": {
        "rate": 3.9,
        "count": 120
      }
    },
  ]
    // {
    //   "id": 2,
    //   "title": "Mens Casual T-Shirts ",
    //   "price": 22.3,
    //   "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket...",
    //   "category": "men's clothing",
    //   "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    //   "rating": {
    //     "rate": 4.1,
    //     "count": 259
    //   }
    // },

    // {
    //   "id": 3,
    //   "title": "Mens Cotton Jacket",
    //   "price": 55.99,
    //   "description": "great outerwear jackets for Spring/Autumn/Winter... ",
    //   "category": "men's clothing",
    //   "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    //   "rating": {
    //     "rate": 4.7,
    //     "count": 500
    //   }
    // },

    // {
    //   "id": 4,
    //   "title": "Mens Casual Slim Fit",
    //   "price": 15.99,
    //   "description": "The color could be slightly different between on the screen and in practice...",
    //   "category": "men's clothing",
    //   "image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    //   "rating": {
    //     "rate": 2.1,
    //     "count": 430
    //   }
    // },

    // {
    //   "id": 5,
    //   "title": "Women's Gold Chain Bracelet",
    //   "price": 695,
    //   "description": "From our Legends Collection, the Naga was inspired by the mythical water...",
    //   "category": "Silver jewelery",
    //   "image": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
    //   "rating": {
    //     "rate": 4.6,
    //     "count": 400
    //   }
    // },

    // {
    //   "id": 6,
    //   "title": "Solid Gold Petite Micropave ",
    //   "price": 168,
    //   "description": "Satisfaction Guaranteed. Return or exchange any order within 30 days...",
    //   "category": "Silver jewelery",
    //   "image": "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
    //   "rating": {
    //     "rate": 3.9,
    //     "count": 70
    //   }
    // },

    // {
    //   "id": 7,
    //   "title": "White Gold Plated Princess",
    //   "price": 9.99,
    //   "description": "Classic Created Wedding Engagement Solitaire Diamond Promise Ring...",
    //   "category": "Silver jewelery",
    //   "image": "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
    //   "rating": {
    //     "rate": 3,
    //     "count": 400
    //   }
    // },

    // {
    //   "id": 8,
    //   "title": "Rose Gold Plated Double",
    //   "price": 10.99,
    //   "description": "Rose Gold Plated Double Flared Tunnel Plug Earrings...",
    //   "category": "Gold jewelery",
    //   "image": "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
    //   "rating": {
    //     "rate": 1.9,
    //     "count": 100
    //   }
    // },

    // {
    //   "id": 9,
    //   "title": "WD 2TB Hard Drive - USB 3.0 ",
    //   "price": 64,
    //   "description": "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC...",
    //   "category": "electronics item",
    //   "image": "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
    //   "rating": {
    //     "rate": 3.3,
    //     "count": 203
    //   }
    // },

    // {
    //   "id": 10,
    //   "title": "SanDisk 1TB SSD",
    //   "price": 109,
    //   "description": "Easy upgrade for faster boot up, shutdown, application load...",
    //   "category": "electronics item",
    //   "image": "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
    //   "rating": {
    //     "rate": 2.9,
    //     "count": 470
    //   }
    // },

    // {
    //   "id": 11,
    //   "title": "Silicon Power 256GB SSD",
    //   "price": 109,
    //   "description": "3D NAND flash are applied to deliver high transfer speeds Remarkable...",
    //   "category": "electronics item",
    //   "image": "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
    //   "rating": {
    //     "rate": 4.8,
    //     "count": 319
    //   }
    // },

    // {
    //   "id": 12,
    //   "title": "WD 4TB Gaming Drive",
    //   "price": 114,
    //   "description": "Expand your PS4 gaming experience, Play anywhere Fast and easy...",
    //   "category": "electronics item",
    //   "image": "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
    //   "rating": {
    //     "rate": 4.8,
    //     "count": 400
    //   }
    // },

    // {
    //   "id": 13,
    //   "title": "Acer SB220Q bi 21.5 inches TV",
    //   "price": 599,
    //   "description": "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon...",
    //   "category": "electronics item",
    //   "image": "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
    //   "rating": {
    //     "rate": 2.9,
    //     "count": 250
    //   }
    // },

    // {
    //   "id": 14,
    //   "title": "Samsung 49-Inch Gaming Monitor",
    //   "price": 999,
    //   "description": "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR...",
    //   "category": "electronics item",
    //   "image": "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
    //   "rating": {
    //     "rate": 2.2,
    //     "count": 140
    //   }
    // },

    // {
    //   "id": 15,
    //   "title": "BIYLACLESEN Women's Jacket",
    //   "price": 56.99,
    //   "description": "The Jackets is US standard size, Please choose size as your...",
    //   "category": "women's cloth",
    //   "image": "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
    //   "rating": {
    //     "rate": 2.6,
    //     "count": 235
    //   }
    // },

    // {
    //   "id": 16,
    //   "title": "Women's Leather Jacket",
    //   "price": 29.95,
    //   "description": "100% POLYURETHANE(shell) 100% POLYESTER(lining)...",
    //   "category": "women's cloth",
    //   "image": "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
    //   "rating": {
    //     "rate": 2.9,
    //     "count": 340
    //   }
    // },

    // {
    //   "id": 17,
    //   "title": "Women Rain Jacket",
    //   "price": 39.99,
    //   "description": "Lightweight perfet for trip or casual wear---Long sleeve with hooded...",
    //   "category": "women's cloth",
    //   "image": "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
    //   "rating": {
    //     "rate": 3.8,
    //     "count": 679
    //   }
    // },

    // {
    //   "id": 18,
    //   "title": "MBJ Women's Short Sleeve Neck V ",
    //   "price": 9.85,
    //   "description": "95% RAYON 5% SPANDEX, Made in USA or Imported...",
    //   "category": "women's cloth",
    //   "image": "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
    //   "rating": {
    //     "rate": 4.7,
    //     "count": 130
    //   }
    // },

    // {
    //   "id": 19,
    //   "title": "Opna Women's Moisture",
    //   "price": 7.95,
    //   "description": "100% Polyester, Machine wash, 100% cationic polyester interlock...",
    //   "category": "women's cloth",
    //   "image": "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
    //   "rating": {
    //     "rate": 4.5,
    //     "count": 146
    //   }
    // },

    // {
    //   "id": 20,
    //   "title": "DANVOUY Womens T Shirt",
    //   "price": 12.99,
    //   "description": "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print...",
    //   "category": "women's cloth",
    //   "image": "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
    //   "rating": {
    //     "rate": 3.6,
    //     "count": 145
    //   }
    // }
  
  return (
    <div>
      {
        obj.map((e, i) => {
          return <div class='card'>
            <img style={{height:"90px",width:"90px",marginLeft:"88px",marginTop:"15px"}} src='https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg' alt=''></img>
            <h4 style={{textAlign:"center",marginTop:"12px"}}>{e.title}</h4>
            
          </div>
        })
      }

    </div>
  )
}

import React from 'react'

export default function ThirdComponent() {
    const cardData = [
  { id: 1, image: 'card-1.webp', title: 'T-Shirts',par:"Men's White Typography oversized...",rupees:"Rs.1200" },
  { id: 2, image: 'card-2.webp', title: 'Shirts',par:"Men's White Typography oversized...",rupees:"Rs.1000" },
  { id: 3, image: 'card-3.webp', title: 'Jackets',par:"Men's White Typography oversized...",rupees:"Rs.1800" },
  { id: 4, image: 'card-4.webp', title: 'Jeans',par:"Men's White Typography oversized...",rupees:"Rs.1400" },
  { id: 5, image: 'card-5.webp', title: 'Shoes',par:"Men's White Typography oversized...",rupees:"Rs.2000" },
];

  return (
    <div>
          <div className="cards-container">
      {cardData.map(card => (
        <div className="card" key={card.id}>
          <img src={card.image} alt={card.title} className="card-img" />
          <h3 className="card-title">{card.title}</h3>
          <h5 class='par'>{card.par}</h5>
          <h5 class='rupees'>{card.rupees}</h5>
          
        </div>
      ))}
    </div>
    </div>
  )
}

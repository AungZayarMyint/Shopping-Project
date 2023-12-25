
import React from 'react'

const Card = ({fruit}) => {
  return (
    <div className='card'>
        <div>
            <h4 className='card-title'>{fruit.name}</h4>
            <p className='card-description'>{fruit.description}</p>
            <p className='card-price'>$ {fruit.price}</p>
        </div>
        <div className='card-right-side'>
            <input type="number" className='card-input' min={1} max={5} value={1}/>
            <button className='card-button'>+ ADD</button>
        </div>
    </div>
  )
}

export default Card;
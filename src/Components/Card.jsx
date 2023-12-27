
import React, { useState } from 'react'

const Card = ({fruit}) => {
  const [currentAmount,setCurrentAmount] = useState(1)
  return (
    <div className='card'>
        <div>
            <h4 className='card-title'>{fruit.name}</h4>
            <p className='card-description'>{fruit.description}</p>
            <p className='card-price'>$ {fruit.price}</p>
        </div>
        <div className='card-right-side'>
            <input type="number" className='card-input' min={1} max={5} value={currentAmount} onChange={(e)=>{
              setCurrentAmount(e.target.value)
            }}/>
            <button className='card-button'>+ ADD</button>
        </div>
    </div>
  )
}

export default Card;
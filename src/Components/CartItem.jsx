import React from 'react'

const CartItem = ({fruit}) => {
  return (
    <div className='card cart'>
        <div>
            <h4 className='card-title'>{fruit.name}</h4>
            <p className='card-description'>{fruit.description}</p>
        </div>
        <div className='card-right-side'>
            <p className='card-price'>$ {fruit.price}</p>
            <input type="number" className='cart-input' min={1} max={5}/>
        </div>
    </div>
  )
}

export default CartItem
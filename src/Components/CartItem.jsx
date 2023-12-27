import React from 'react'

const CartItem = ({fruit}) => {
  return (
    <div className='card cart'>
        <div>
            <h4 className='card-title'>{fruit.name}</h4>
            <p className='card-price'>$ {fruit.price}</p>
        </div>
        <div className='card-right-side'>
          <p className='card-quantity'>x
            <span>1</span>
          </p>
          <div className='quantity-ctr'>
            <button className='quantity-btn m-ctr'>+</button>
            <button className='quantity-btn'>-</button>
          </div>
        </div>
    </div>
  )
}

export default CartItem
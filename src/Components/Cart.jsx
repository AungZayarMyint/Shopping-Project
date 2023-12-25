import React from 'react'
import CartItem from './CartItem'

const fruits = [
    {
        id : 1,
        price : 10000,
        name : "banana",
        description : "fresh banana from world",
        quantity : 2,
    },
    {
        id : 2,
        price : 20000,
        name : "apple",
        description : "fresh apple from world",
        quantity : 1,
    },
    {
        id : 3,
        price : 15000,
        name : "mango",
        description : "fresh mango from world",
        quantity : 2,
    },
]

const Cart = () => {
  return (
    <section className='cart-box'>
        <h2>Carts</h2>
        {
            fruits.map(fruit=>(
                <CartItem key={fruit.id} fruit={fruit}/>
            ))
        }
        <hr />
        <div className='total'>
            <h3>Total Price</h3>
            <span>$ 3000</span>
        </div>
        <div className='btns'>
            <button className='close-btn'>Close</button>
            <button className='order-btn'>Order</button>
        </div>
    </section>
  )
}

export default Cart
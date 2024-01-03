import React from 'react'
import CartItem from './CartItem'
import { useContext } from 'react'
import { ItemContext } from '../store/ItemContext'

const Cart = (props) => {
    const {items, totalAmount} = useContext(ItemContext)

    const totalPrice = `${totalAmount.toFixed(2)}`

  return (
    <section className='cart-box'>
        <h2>Your Cart Items Are Here</h2>
        <section className='overflow-ctr'>
            {
                items.length < 1 ? (<h1 className='no-item'>No Item!!</h1>) : (<>{
                items.map((fruit)=>(
                    <CartItem key={fruit.id} fruit={fruit}/>
                ))
            }</>)
            }
        </section>
        
        <hr />
        <div className='total'>
            <h3>Total Price</h3>
            <span>$ {totalPrice}</span>
        </div>
        <div className='btns'>
            <button className='close-btn' onClick={props.hideCartHandler}>Close</button>
            {
            items.length < 1 ? (<></>) : (<button className='order-btn' onClick={() => {
                alert("ordered!")
            }}>Order</button>)
            }
        </div>
    </section>
  )
}

export default Cart

import React, { useState } from 'react';
import { useContext } from 'react';
import { ItemContext } from '../store/ItemContext';

const Card = ({fruit}) => {
  const {id, name, description, price} = fruit;

  const {addItem} = useContext(ItemContext);

  const [currentAmount,setCurrentAmount] = useState(1);
  const currentAmountNumber = +currentAmount;

  const addToCartHandler = () => {
    if(currentAmountNumber < 1 || currentAmountNumber > 5){
      alert("please enter an valid amount !!");
      return;
    }
    addItem({
      id,
      name,
      price,
      amount : currentAmountNumber,
    })
  }

  return (
    <div className='card'>
        <div>
            <h4 className='card-title'>{name}</h4>
            <p className='card-description'>{description}</p>
            <p className='card-price'>$ {price}</p>
        </div>
        <div className='card-right-side'>
            <input type="number" className='card-input' min={1} max={5} value={currentAmount} onChange={(e)=>{
              setCurrentAmount(e.target.value)
            }}/>
            <button className='card-button' onClick={addToCartHandler}>+ ADD</button>
        </div>
    </div>
  )
}

export default Card;
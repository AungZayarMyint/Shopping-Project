
import React, { useState } from 'react'
import Header from './Header'
import Body from './Body'
import BackDrop from '../Components/BackDrop'

const Main = () => {
  const [showCart, setShowCard] = useState(false)

  const showCartHandler = ()=>{
    setShowCard(true)
  }

  const hideCartHandler = ()=>{
    setShowCard(false)
  }

  return (
    <section>
        <Header showCartHandler={showCartHandler}/>
        <Body/>
        <BackDrop showCart={showCart} hideCartHandler={hideCartHandler}/>
    </section>
    )
}

export default Main
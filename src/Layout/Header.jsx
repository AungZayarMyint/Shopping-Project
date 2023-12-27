
import React from 'react'
import Summary from '../Components/Summary'
import Nav from '../Components/Nav'

const Header = (props) => {
  return (
    <>
        <Nav showCartHandler={props.showCartHandler}/>
        <Summary/>
    </>
    )
}

export default Header
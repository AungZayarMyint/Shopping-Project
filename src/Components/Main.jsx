import React, { useState } from 'react';
import FormBox from './Form';
import List from './List'

const Main = () => {
  const [userInfo, setUserInfo] = useState([]);

  const getUserInfo = (userInfoObj) => {
    setUserInfo([...userInfo,userInfoObj])
  }
  return (
    <section className='main'>
      <FormBox getUserInfo={getUserInfo}/>
      <List userInfo={userInfo}/>
    </section>
    )
}

export default Main
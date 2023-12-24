
import React, { useRef } from 'react';
import Card from './Card';

const Form = (props) => {
    
    const nameInputRef = useRef();
    const liveInputRef = useRef();
    const emailInputRef = useRef();

    const addUser = (event) => {
        event.preventDefault();
        if(
            nameInputRef.current.value.trim().length === 0 || 
            liveInputRef.current.value.trim().length === 0 || 
            emailInputRef.current.value.trim().length === 0) {
            window.confirm("Please fill valid value for all inputs.");
            return;
        }

        const userInfo = {
            name : nameInputRef.current.value,
            live : liveInputRef.current.value,
            email : emailInputRef.current.value,
        }
        props.getUserInfo(userInfo);

        nameInputRef.current.value = "";
        liveInputRef.current.value = "";
        emailInputRef.current.value = "";
        
        // setName("");
        // setLive("");
        // setEmail("");

        console.log(nameInputRef.current.value);
    };

  return (
    <Card>
    <div>
        <form onSubmit={addUser}>
            <div className='form-div'>
                <label htmlFor="name">Name</label>
                <input type="text" name="" id="name" ref={nameInputRef}/>
            </div>
            <div className='form-div'>
                <label htmlFor="live">Live</label>
                <input type="text" name="" id="live" ref={liveInputRef}/>
            </div>
            <div className='form-div'>
                <label htmlFor="email">Email</label>
                <input type="text" name="" id="email" ref={emailInputRef}/>
            </div>
            <button type='submit' className='btn'>Add User</button>
        </form>
    </div>
    </Card>
  )
}

export default Form
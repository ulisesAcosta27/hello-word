import React, { useState, useEffect } from 'react';
import './style/HelloUser.css'
const HelloUser = () => {
    const [inputValue, setInputValue] = useState('');
    const [nameComplete, setNameComplete] = useState('');
    const [greeten, setGreeten] = useState('Please enter your name 😁');
    const handleClick = (e) => {
        setInputValue('')
        e.preventDefault()
        setNameComplete(inputValue);
    }
    const changeGreeten = () => setGreeten(`Welcome ${ nameComplete }`);
    useEffect(() => {
        if(nameComplete !== ''){
            changeGreeten()
            alert('Thank you for visiting me 😄') 
        }
    }, [nameComplete])

  return (
    <div className='container'>
        <div className='cardContainer'>
            <h1>Hello User App</h1>
            <div className="formContainer">
                <input 
                    type="text" 
                    placeholder='Enter your name'
                    onChange={ e => setInputValue(e.target.value) }
                    value={ inputValue }
                />
                <button onClick={ handleClick }>¡Greet me!</button>
                <p>{ greeten }</p>
            </div>
        </div>
    </div>
  )
};

export default HelloUser;


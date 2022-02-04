import React, { useState, useEffect } from 'react';
import './style/HelloWorld.css'
const HelloWorld = () => {
    const [greeten, setGreeten] = useState('');
    useEffect(() => {
        console.log('Ejecutando UseEffect');
        setGreeten('¡Hello World 😀!')
    }, []);
    
  return (
    <div className='container'>
        <div className='cardContainer'>
            <h1>Hello World App</h1>
            <p>{ greeten }</p>
        </div>
    </div>
  )
};

export default HelloWorld;

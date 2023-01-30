import React, { Component, useState } from 'react';
import GeneralInfo from './components/general-info';
import './App.css';

function App() {
    
    const [item, setItem] = useState({}) 
    let thing = {
        name: {text: 'Pickle'}, 
        email: {text: ''}, 
        phone: {text: ''}, 
        birth_day: {text: ''}, 
        school: {text: ''},  
        degree: {text: ''}, 
        graduation_year: {text: ''}, 
        minors: {text: ''}, 
        company: {text: ''}, 
        position: {text: ''}, 
        start_date: {text: ''}, 
        end_date: {text: ''}, 
    }

    const update = (e) => {
        setItem({
            ...thing
        })
    }

    return (
        <div>
        Hi there!
        {item.name}
        </div>
        )
}





export default App;

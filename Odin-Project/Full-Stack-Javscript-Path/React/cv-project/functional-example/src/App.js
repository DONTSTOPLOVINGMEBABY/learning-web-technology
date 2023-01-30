import React, { useEffect, useState } from 'react';
import GeneralInfo from './components/general-info';
import PracticalExperience from './components/practical-experience';
import './App.css';
import EducationalExperience from './components/educational-experience';

function App() {

  const [form_items, setForm_items] = useState({
    name: {text: ''}, 
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
  }) 

  const [cv_items, setCv_items] = useState({
    name: {text: ''}, 
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
  }) 

  useEffect(() => {
    setCv_items({
      ...form_items
    })
  }, [form_items])


  const change_function = (e) => { 
    let string = e.target.value ;  
    setForm_items({
      ...form_items, 
      [e.target.id]: {text: string}, 
    })
  }

  return (
    <div className='second'>
      <div className='top'>
        <h1>Enter things for resume here</h1>
        <GeneralInfo 
        makeChange={change_function}
        name={form_items.name.text}
        email={form_items.email.text}
        phone={form_items.phone.text}
        birth_day={form_items.birth_day.text}/>
        <EducationalExperience 
        makeChange={change_function}
        school={form_items.school.text}
        degree={form_items.degree.text}
        grad_year = {form_items.graduation_year.text}
        minors = {form_items.minors.text} 
        />
        <PracticalExperience
        makeChange={change_function}
        company = {form_items.company.text} 
        position = {form_items.position.text} 
        start_date = {form_items.start_date.text} 
        end_date = {form_items.end_date.text}/>
      </div>
      <div className='bottom'>
        <p>Name: {cv_items.name.text}</p>
        <p>Email: {cv_items.email.text}</p>
        <p>Phone Number: {cv_items.phone.text}</p>
        <p>Birth Day: {cv_items.birth_day.text}</p>
        <p>School Name: {cv_items.school.text}</p>
        <p>Degree Received: {cv_items.degree.text}</p>
        <p>Graduation Year: {cv_items.graduation_year.text}</p>
        <p>Minors: {cv_items.minors.text}</p>
        <p>Company name: {cv_items.company.text}</p>
        <p>Position Title: {cv_items.position.text}</p>
        <p>Start Date: {cv_items.start_date.text}</p>
        <p>End Date: {cv_items.end_date.text}</p>
      </div>
    </div>
  );
}

export default App;

import { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import './App.css'

function Signup() {
  const [count, setCount] = useState(0)
  const usernameRef = useRef()
  const passwordRef = useRef()
  const navigate = useNavigate()

  async function signup (e) {
    e.preventDefault()
    let payload = {
      username : usernameRef.current.value, 
      password : passwordRef.current.value, 
    }
    console.log(payload)
    let signup_request = await fetch("http://localhost:3000/signup", {
      method: 'POST', 
      headers : { 'Content-Type' : 'application/json' 
      }, 
      body: JSON.stringify({ 
          username : usernameRef.current.value, 
          password: passwordRef.current.value, 
      })
    })
    if (!signup_request.ok){ alert("Failed") ; return }
    navigate("/signin")
  }


  return (
    <>
      <form onSubmit={signup}>
        <div className='form-cell'>
          <label htmlFor="Username">Username </label>
          <input type="text" id='Username' ref={usernameRef}/>
        </div>
        <div className='form-cell'>
          <label htmlFor="Password">Password </label>
          <input type="text" id='Password' ref={passwordRef}/>
        </div>
        <button type='submit'>Create Account</button>
      </form>
    </>
  )
}

export default Signup

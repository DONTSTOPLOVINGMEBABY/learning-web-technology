import { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import './App.css'

function SignIn() {
  const [count, setCount] = useState(0)
  const usernameRef = useRef()
  const passwordRef = useRef()
  const navigate = useNavigate()

  async function signin (e) {
    e.preventDefault()
    let payload = {
      username : usernameRef.current.value, 
      password : passwordRef.current.value, 
    }
    console.log(payload)
    let signup_request = await fetch("http://localhost:3000/login", {
      method: 'POST', 
      headers : { 'Content-Type' : 'application/json' 
      }, 
      body: JSON.stringify({ 
          username : usernameRef.current.value, 
          password: passwordRef.current.value, 
      })
    })
    if (!signup_request.ok){ alert("Failed") ; return }
    navigate("/home")
  }


  return (
    <>
      <form onSubmit={signin}>
        <div className='form-cell'>
          <label htmlFor="Username">Username </label>
          <input type="text" id='Username' ref={usernameRef}/>
        </div>
        <div className='form-cell'>
          <label htmlFor="Password">Password </label>
          <input type="text" id='Password' ref={passwordRef}/>
        </div>
        <button type='submit'>Login</button>
      </form>
    </>
  )
}

export default SignIn

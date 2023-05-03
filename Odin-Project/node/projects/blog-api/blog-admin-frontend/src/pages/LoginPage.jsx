import styles from './styles/LoginPage.module.css'
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage() {

    // Hooks
    const username = useRef()
    const password = useRef() 
    const user_info_error = useRef()
    const server_error = useRef()
    const navigate = useNavigate()

    const fetchLogin = async () => {
        return await fetch("http://localhost:3001/admin/login", {
            method: 'POST', 
            headers : { 'Content-Type' : 'application/json' 
            }, 
            body: JSON.stringify({ 
                username : username.current.value, 
                password: password.current.value, 
            })
        })
    }

    const hideErrorMessages = () => {
        user_info_error.current.style.display = 'none'
        server_error.current.style.display = 'none'
    }

    const submitLogin = async (e) => {
        e.preventDefault() 
        let token = await fetchLogin()
        if (!token.ok){
            password.current.value = ''
            if (token.status === 403 || token.status === 401){
                user_info_error.current.style.display = 'block'
            }
            else {
                server_error.current.style.display = 'block'
            }
            return
        }
        token = await token.json()
        localStorage.setItem('jwt', token.accessToken)
        navigate("/admin/home")
    }

    return (
        <div id='admin-login'>
            <div id='left-side-login'>
                <Player 
                    src="https://assets10.lottiefiles.com/packages/lf20_162jfba4.json"
                    background="transparent"
                    speed={1.2}
                    loop
                    autoplay
                    id='login-animation'
                />
            </div>
            <div id='right-side-login'>
                <form id='login-form' action="http://localhost:3001/admin/login" method="POST" onSubmit={submitLogin}>
                    <h1 id='form-title'>Admin Login</h1>
                    <div className="login-input-cell">
                        <input type="text" name="username" ref={username} id="username-input" placeholder='Username' required 
                        onChange={hideErrorMessages}/>
                    </div>
                    <div className="login-input-cell">
                        <input type="password" name="password" ref={password} id="password-input" placeholder='Password' onChange={hideErrorMessages} required/>
                    </div>
                    <div className="login-input-cell">
                        <button id='sign-in-button' type='submit'>LOGIN</button>
                    </div>
                    <span className='form-error' ref={user_info_error}>Incorrect Username/Password</span>
                    <span className='form-error' ref={server_error}>Server Error, Try Again Later</span>
                </form>
            </div>
        </div>
    )
}

export default LoginPage

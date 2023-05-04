import styles from './styles/LoginPage.module.css'
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import authenticate_jwt from '../utils/auth-jwt'

function LoginPage() {

    // Hooks
    const username = useRef()
    const password = useRef() 
    const user_info_error = useRef()
    const server_error = useRef()
    const navigate = useNavigate()
    const [hideLogin, setHideLogin] = useState(true)

    const checkIfLoggedIn = async (e) => {
        const token = authenticate_jwt() 
        if (!token){
            setHideLogin(false)
            return
        }
        let authenticate = await fetch("http://localhost:3001/admin/verify", {
            method: 'GET', 
            headers : { 
				'Content-Type' : 'application/json', 
				'Authorization' : `Bearer ${token}` 
			}
        })
        if (authenticate.ok){ navigate('/admin/home') }
        setHideLogin(false)
    }

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

    useEffect( () => {
        checkIfLoggedIn()
    }, [])

    return (
        <>
        { !hideLogin ? 
        <div id={styles.main_container}>
            <div id={styles.admin_login_modal}>
                <div id={styles.left_side_login}>
                    <Player 
                        src="https://assets10.lottiefiles.com/packages/lf20_162jfba4.json"
                        background="transparent"
                        speed={1.2}
                        loop
                        autoplay
                        id={styles.login_animation}
                    />
                </div>
                <div id={styles.right_side_login}>
                    <form id={styles.login_form} action="http://localhost:3001/admin/login" method="POST" onSubmit={submitLogin}>
                        <h1 id={styles.form_title}>Admin Login</h1>
                        <div className={styles.login_input_cell}>
                            <input type="text" name="username" ref={username} id={styles.username_input} placeholder='Username' required 
                            onChange={hideErrorMessages}/>
                        </div>
                        <div className={styles.login_input_cell}>
                            <input type="password" name="password" ref={password} id={styles.password_input} placeholder='Password' onChange={hideErrorMessages} required/>
                        </div>
                        <div className={styles.login_input_cell}>
                            <button id={styles.sign_in_button} type='submit'>LOGIN</button>
                        </div>
                        <span className={styles.form_error} ref={user_info_error}>Incorrect Username/Password</span>
                        <span className={styles.form_error} ref={server_error}>Server Error, Try Again Later</span>
                    </form>
                </div>
            </div>
        </div> : null } 
        </>
    )
}

export default LoginPage
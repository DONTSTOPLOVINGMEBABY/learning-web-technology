import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth"
import { createUserWithEmailAndPassword, GithubAuthProvider } from "firebase/auth" 
import { useNavigate } from "react-router-dom";
import {auth} from "../../firebase";
import React, { useRef, useState } from "react";
import Login from "./login";
import SignUp from "./signup";
import "../../styles/login-signup.css"


function LoginForm () {

    const username = useRef() ; 
    const password = useRef() ; 
    const confirm_password = useRef() ; 
    const email = useRef()
    const [signUp, setSignUp] = useState(false)
    let navigate = useNavigate() ; 

    const changeSignUp = () => {
        setSignUp(!signUp) ;
    }

    const login_account = () => {
        signInWithEmailAndPassword(auth, email.current.value, password.current.value).then( 
            (userCredential) => {
                console.log(userCredential) 
                console.log("Worked")
                navigate("/worked") ; 
            }
         ).catch((error) => {
            console.log(error)
            console.log("nope!")
            navigate("/failed") ;
         })
     }

    const signup_account = () => {
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value).then(
            (userCredential) => {
                console.log("It worked!"); console.log(userCredential) ; 
            }
        ). catch ( (error) => {
            console.log("Big fat error!") ; 
            console.log(error) ; 
        })
    }

    const continue_with_github = () => {
        let token ; 
        let user ; 
        let provider = new GithubAuthProvider() ; 
        provider.addScope('repo');
        signInWithPopup(auth, provider)
        .then((res)=> {
            console.log(res) ; 
            token = res.user.accessToken ; 
            user = res.user ; 
            console.log(token) ; 
            console.log(user) ; 
            navigate("/worked")
        })
        .catch((err) => {
            console.log(err)
            navigate("/failed")
        })
        .finally(() => {console.log("Finally!")})
    }

    
    return (
        <div className="login-signup">
            { !signUp ? 
            <Login  
            email={email}
            password={password}
            changeSignUp={changeSignUp}
            login_account={login_account}
            github={continue_with_github}/> 
            : null }

            { signUp ? 
            <SignUp 
            username={username}
            password={password}
            confirm_password={confirm_password}
            email={email}
            changeSignUp={changeSignUp}
            signup_account={signup_account}/> 
            : null } 
        </div>
    )
}

export default LoginForm
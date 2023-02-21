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

    const changeSignUp = () => {
        setSignUp(!signUp) ;
    }


    
    return (
        <div className="login-signup">
            { !signUp ? 
            <Login  
            username={username}
            password={password}
            changeSignUp={changeSignUp}/> 
            : null }

            { signUp ? 
            <SignUp 
            username={username}
            password={password}
            confirm_password={confirm_password}
            email={email}
            changeSignUp={changeSignUp}/> 
            : null } 

        </div>
    )
}

export default LoginForm
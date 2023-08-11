import { useRef } from "react"

function Login () {

    const username = useRef()
    const password = useRef()

    const login = async (e) => {
        e.preventDefault()
        // something useful here
    }

    return (
        <form onSubmit={login}>
            <div className="form-cell"> 
                <label htmlFor="username">Username </label>
                <input ref={username} type="text" id="username"/>
            </div>
            <div className="form-cell">
                <label htmlFor="password">Password </label>
                <input ref={password} type="text" id="password"/>
            </div>
            <button type="submit">Login</button>
        </form>
    )
}

export default Login
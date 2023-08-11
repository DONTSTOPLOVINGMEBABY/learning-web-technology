import { useRef } from "react"

function Signup () {

    const username = useRef()
    const password = useRef()
    const confirm_password = useRef()

    const signup = async (e) => {
        e.preventDefault()
        // something useful here
    }

    return (
        <form onSubmit={signup}>
            <div className="form-cell"> 
                <label htmlFor="username">Username </label>
                <input ref={username} type="text" id="username"/>
            </div>
            <div className="form-cell">
                <label htmlFor="password">Password </label>
                <input ref={password} type="text" id="password"/>
            </div>
            <div className="form-cell">
                <label htmlFor="conf-password">Confirm Password </label>
                <input ref={confirm_password} type="text" id="conf-password"/>
            </div>
            <button type="submit">Signup</button>
        </form>
    )
}

export default Signup
import { Link, Outlet } from "react-router-dom";

function AuthComponent () {
    return (
        <>
            <Link to='/auth/login'>Login</Link>
            <br/>
            <Link to='/auth/signup'>Signup</Link>
            <Outlet/>
        </>
    )
}

export default AuthComponent
import { Navigate, Outlet } from "react-router-dom";

function Root () {

    return (
        <>
            <Navigate to='home'/>
            <Outlet />
        </>
    )
}

export default Root
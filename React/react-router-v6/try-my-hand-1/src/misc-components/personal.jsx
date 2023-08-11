import { Navigate } from "react-router-dom";
import { Outlet } from "react-router-dom";

export default function Personal () {
    return  (
        <>
            <Navigate to='/personal/henry'/>
            <Outlet/>
        </>
    )
}
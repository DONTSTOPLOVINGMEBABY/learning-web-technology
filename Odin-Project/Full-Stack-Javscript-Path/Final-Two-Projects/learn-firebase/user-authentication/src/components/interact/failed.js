import React from "react";
import { useNavigate } from "react-router-dom";

function Failed () {
    let navigate = useNavigate() ; 
    const return_home = () => {
        navigate("/")
    }

    return (
        <div style={{
            display : "flex", 
            justifyContent: "center", 
            alignContent: "center", 
            height: "100vh",
            width: "100vw"}}>
            It Failed! <button onClick={return_home} style={{
                height: "100px", 
                width: "100px", 
                marginLeft: "50px", 
            }}>Return to Login</button>
        </div>
    )
}

export default Failed
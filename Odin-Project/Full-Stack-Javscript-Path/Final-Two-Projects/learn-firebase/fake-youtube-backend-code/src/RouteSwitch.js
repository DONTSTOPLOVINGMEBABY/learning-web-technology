import {BrowserRouter, Routes, Route} from "react-router-dom" ;
import App from "./App";
import MakeUser from "./components/firestore/make-user";
import { userContext } from "./components/utils/contexts";
import { useState, useMemo } from "react";
import DisplayLogin from "./components/auth/display-login";
import EverythingUserRelated from "./components/auth/signup-login";

const RouteSwitch = () => {

    const [userID, setUserId] = useState("") ; 
    const userValue = useMemo(() => ({userID, setUserId}), [userID, setUserId])


    return (
    <BrowserRouter>
        <userContext.Provider value={userValue} >
                <Routes>
                <Route exact path="/" element={<App/>}/>
                <Route exact path="/makeuser" element={<MakeUser/>}/>
                <Route exact path="/login-signup" element={<EverythingUserRelated/>}/>
                <Route exact path="/redirect" element={<DisplayLogin/>}/>
                </Routes>
            </userContext.Provider>
        </BrowserRouter>
    )
}

export default RouteSwitch
import {BrowserRouter, Routes, Route} from "react-router-dom" ;
import Header from "./components/header/header";
import HomePage from "./components/display-content-section/homepage/HomePage";
import SideBar from "./components/sidebar/signed-in-sidebar";
import MiniSideBar from "./components/sidebar/mini-sidebar";
import SignedOutSideBar from "./components/sidebar/signed-out-sidebar";
import { useMemo, useState } from "react";
import { userContext } from "./components/utils/contexts";
import './styles/App.css';

const RouteSwitch = () => {

    const [user, setUser] = useState({
        logged_in : false, 
        first_name : null, 
        last_name : null, 
        profile_url : null, 
        uid : null, 
    }) ; 
    const userValue = useMemo(() => ({user, setUser}), [user, setUser])

    return (
        <BrowserRouter>
            <userContext.Provider value={userValue}>
                <Header />
                <div className="HomePage">
                    { user.logged_in ? 
                    <> <SideBar/> <MiniSideBar/> </> : 
                    <> <SignedOutSideBar /> <MiniSideBar /> </>
                    }
                    <Routes>
                        <Route exact path="/" element={<HomePage/>}/>
                    </Routes>
                </div>
            </userContext.Provider>
        </BrowserRouter>
    )
}

export default RouteSwitch 
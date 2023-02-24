import {BrowserRouter, Routes, Route} from "react-router-dom" ;
import Header from "./components/header/header";
import HomePage from "./HomePage";
import { useMemo, useState } from "react";
import { userContext } from "./components/utils/contexts";
import './styles/App.css';

const RouteSwitch = () => {

    const [user, setUser] = useState(true) ; 
    const userValue = useMemo(() => ({user, setUser}), [user, setUser])

    return (
        <BrowserRouter>
            <userContext.Provider value={userValue}>
                <Header />
                <Routes>
                    <Route exact path="/" element={<HomePage/>}/>
                </Routes>
            </userContext.Provider>
        </BrowserRouter>
    )
}

export default RouteSwitch 
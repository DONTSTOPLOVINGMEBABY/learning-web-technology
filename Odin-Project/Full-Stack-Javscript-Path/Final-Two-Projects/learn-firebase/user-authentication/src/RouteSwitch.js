import {BrowserRouter, Routes, Route} from "react-router-dom" ;
import LoginForm from "./components/auth/login-signup";

const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<LoginForm/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default RouteSwitch
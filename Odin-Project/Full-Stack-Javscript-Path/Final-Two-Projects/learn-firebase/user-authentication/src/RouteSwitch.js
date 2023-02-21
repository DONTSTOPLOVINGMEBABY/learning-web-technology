import {BrowserRouter, Routes, Route} from "react-router-dom" ;
import LoginForm from "./components/auth/login-signup";
import Worked from "./components/interact/worked";
import Failed from "./components/interact/failed";

const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<LoginForm/>}/>
                <Route exact path="/worked" element={<Worked/>}/>
                <Route exact path="/failed" element={<Failed/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default RouteSwitch
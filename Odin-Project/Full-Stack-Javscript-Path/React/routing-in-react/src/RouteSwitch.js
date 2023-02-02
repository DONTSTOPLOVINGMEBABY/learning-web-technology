import {BrowserRouter, Routes, Route} from "react-router-dom" ;
import App from "./App"
import Profile from "./Profile";
import Photo from "./pictures";
import FerdaBoys from "./ferda";

const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/photo" element={<Photo/>}/>
                <Route path="/ferda" element={<FerdaBoys/>}/>
            </Routes>
        </BrowserRouter>
    ) ; 
} ; 

export default RouteSwitch
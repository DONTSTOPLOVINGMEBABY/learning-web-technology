import {BrowserRouter, Routes, Route} from "react-router-dom" ;
import App from "./App";
import Chat from "./comps/chat/chat";

const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<App/>}/>
                <Route exact path="/chat" element={<Chat/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default RouteSwitch
import {BrowserRouter, Routes, Route} from "react-router-dom" ;
import App from "./App";
import Chat from "./comps/chat/chat";
import PlayVideo from "./comps/video-player/video-player";

const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<App/>}/>
                <Route exact path="/chat" element={<Chat/>}/>
                <Route exact path="/Playvideo" element={<PlayVideo/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default RouteSwitch
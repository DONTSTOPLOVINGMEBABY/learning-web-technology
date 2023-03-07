import {BrowserRouter, Routes, Route} from "react-router-dom" ;
import Header from "./components/header/header";
import HomePage from "./components/video-components/HomePage";
import SideBar from "./components/sidebar/signed-in-sidebar";
import MiniSideBar from "./components/sidebar/mini-sidebar";
import SignedOutSideBar from "./components/sidebar/signed-out-sidebar";
import PlayVideo from "./components/video-components/VideoPlayer";
import { useEffect, useMemo, useState } from "react";
import { userContext } from "./components/utils/contexts";
import './styles/App.css';

const RouteSwitch = () => {

    const [user, setUser] = useState({
        logged_in : false, 
        first_name : null, 
        last_name : null, 
        profile_url : null, 
        uid : null, 
        channel_name: null, 
    }) ; 
    const userValue = useMemo(() => ({user, setUser}), [user, setUser])

    useEffect( () => {
        const data = localStorage.getItem("login-info") ; 
        if (data) {setUser(JSON.parse(data))} ; 
    }, [])

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
                        <Route exact path="/" element={<HomePage 
                        main_container="video-container"
                        video_class="video"
                        video_information="video-information-main"
                        profile_picture="profile-picture-main"
                        profile_photo="profile-photo-homepage-player" 
                        channel_video_information="channel-video-information-homepage"
                        video_title="video-title-homepage"
                        />}/>
                        <Route exact path="/video-player/:id" element={<PlayVideo/>}/>
                    </Routes>
                </div>
            </userContext.Provider>
        </BrowserRouter>
    )
}

export default RouteSwitch 
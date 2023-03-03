import upload_video from "../assets/upload-video.svg" 
import notifications_bell from "../assets/notifications-bell.svg"
import default_profile_picture from "../assets/default-profile-picture.svg"
import { useContext, useState, useRef, useEffect } from "react"
import { userContext } from "../utils/contexts"


function LoggedIn () {

    const {user, setUser} = useContext(userContext) ; 
    const [profile, setProfile] = useState(true) ; 

    const activate_profile = () => {setProfile(!profile)}  ;

    return (
        <div className="logged-in">
            <div className="buttons">
                <div className="wrap-icon">
                    <img id="upload-video-icon" src={upload_video} alt="upload-video-icon"/>
                </div>
                <div className="wrap-icon">
                    <img id="notifications-bell-icon" src={notifications_bell} alt="notifications-bell"/>
                </div>
                <div className="profile" onClick={activate_profile}>
                    {/* This needs to be able to load a profile photo from the user's profile */}
                    <img id="profile-picture-header" src={user.profile_url} alt="your-profile-avatar"/>
                </div>
            </div>
            { profile ? 
            <>  
                <div className="account-navigation">
                    <div className="account-navigation-user-info">
                        <img id="account-nav-profile-pic" src={user.profile_url} alt="your-profile-picture"/>
                        <div>
                            <div>{user.first_name} {user.last_name}</div>
                            <div>@{user.channel_name}</div>
                        </div>
                    </div>
                    <div className="category-border menu-options">
                        
                    </div> 
                </div>
            </> 
            : null}
        </div>
    )
}

export default LoggedIn
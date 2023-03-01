import upload_video from "../assets/upload-video.svg" 
import notifications_bell from "../assets/notifications-bell.svg"
import default_profile_picture from "../assets/default-profile-picture.svg"
import { useContext } from "react"
import { userContext } from "../utils/contexts"


function LoggedIn () {

    const {user, setUser} = useContext(userContext)

    return (
        <div className="logged-in">
            <div className="buttons">
                <div className="wrap-icon">
                    <img id="upload-video-icon" src={upload_video} alt="upload-video-icon"/>
                </div>
                <div className="wrap-icon">
                    <img id="notifications-bell-icon" src={notifications_bell} alt="notifications-bell"/>
                </div>
                <div className="profile">
                    {/* This needs to be able to load a profile photo from the user's profile */}
                    <img id="profile-picture-header" src={user.profile_url} alt="your-profile-avatar"/>
                </div>
            </div>
        </div>
    )
}

export default LoggedIn
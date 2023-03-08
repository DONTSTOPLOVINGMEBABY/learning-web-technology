import youtube_icon from "../assets/youtube-icon.svg"
import menu_icon from "../assets/menu.svg"
import { useRef } from "react"

function MainLogo () {

    const return_home = () => {
        // Navigate back to home page when clicked 
    }

    const trigger_menu = () => {
        console.log("hi") ; 
    }
    
    return ( 
        <div className="main-logo" onClick={return_home}>
            <img className="wrap-icon" onClick={trigger_menu} id="menu-icon" src={menu_icon} alt="menu-icon"/>
            <img id="youtube-icon" src={youtube_icon} alt="YouTube Icon"/> 
            <div id="youtube-text">Fake-YouTube</div>
        </div> 
    )
}

export default MainLogo
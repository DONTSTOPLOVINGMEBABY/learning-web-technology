import youtube_icon from "../assets/youtube-icon.svg"

function MainLogo () {

    const return_home = () => {
        // Navigate back to home page when clicked 
    }

    return ( 
        <div className="main-logo" onClick={return_home}>
            <img id="youtube-icon" src={youtube_icon} alt="YouTube Icon"/> 
            <div id="youtube-text">Fake-YouTube</div>
        </div> 
    )
}

export default MainLogo
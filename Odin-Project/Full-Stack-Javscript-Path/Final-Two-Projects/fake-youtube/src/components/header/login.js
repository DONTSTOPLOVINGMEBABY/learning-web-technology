import upload_video from "../assets/upload-video.svg" ; 
import profile_svg from "../assets/login-profile.svg"

/* 

If not signed in, we need a button that allows you to sign in

If signed in, we need a button that 

https://www.youtube.com/watch?v=5LrDIWkK_Bc&ab_channel=WebDevSimplified

watch useContext video

*/ 

function Login () {

    const loginFunction = () => {
        console.log("Login!")
    }

    return (
        <div className="login-primary">
            <button onClick={loginFunction} className="login">
                <img id="profile-svg" src={profile_svg} alt="profile-svg"/>
                <div id="sign-in-text">Sign In</div>
            </button>
        </div>
    )
}

export default Login
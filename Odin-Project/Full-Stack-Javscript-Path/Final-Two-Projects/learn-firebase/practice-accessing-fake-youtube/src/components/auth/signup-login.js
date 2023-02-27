import { auth } from "../../firebase";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth"
import { createUserWithEmailAndPassword, GithubAuthProvider } from "firebase/auth" 
import { useRef } from "react";
import { useContext } from "react";
import { userContext } from "../utils/contexts";
import { addDoc, collection, getDoc, setDoc, doc } from "@firebase/firestore";
import { firestore } from "../../firebase";


const get_object = (channel_name) => {
    return {
        channel_name: channel_name, 
        avatar: "url", 
        subscriptions: [], 
        playlists: {
            watch_later: [], 
            favorites: [], 
            likes: [], 
            history: [], 
        }
    }
}


function EverythingUserRelated () {

    const login_email = useRef(); 
    const login_password = useRef() ; 
    const signup_email = useRef() ; 
    const signup_password = useRef() ; 
    const channel_name = useRef() ; 

    const {userID, setUserId} = useContext(userContext) ; 

    const users_collection = collection(firestore, "users") ; 


    const signup = async (e) => {
        e.preventDefault() ;
        console.log("signup") ; 
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, signup_email.current.value, signup_password.current.value) ; 
            console.log(userCredential) ; 
            let uid = userCredential.user.uid ; 
            setUserId(uid) ; 
            uid = get_object(channel_name.current.value)
            // const docRef = doc(users_collection, userCredential.user.uid ) ; 
            await addDoc(users_collection, uid) ; 
            console.log(uid) ; 
        }
        catch (error){
            console.log(error) ; 
        }
    }

    const login = async (e) => {
        console.log("login") ;
        e.preventDefault() ;
        try {
            const userCredential = await signInWithEmailAndPassword(auth, login_email.current.value, login_password.current.value) ; 
            console.log(userCredential.user.uid) ; 
            setUserId(userCredential.user.uid) ; 
        }
        catch (error){
            console.log(error) ; 
        }
    }

    return (
        <div className="login-signup">

            <form className="login" onSubmit={login}>
                <h1>Login </h1>
                <div className="cell">
                    <label htmlFor="login-email">Email </label>
                    <input required type="email" id="login-email" ref={login_email}></input>
                </div>
                <div className="cell">
                    <label htmlFor="login-password">Password </label>
                    <input required type="text" id="login-password" ref={login_password}></input>
                </div>
                <button type="submit">Login</button>
            </form>
            <form className="sign-up" onSubmit={signup}>
                <h1>Sign Up </h1>
                    <div className="cell">
                        <label htmlFor="login-email">Email </label>
                        <input required type="email" id="login-email" ref={signup_email}></input>
                    </div>
                    <div className="cell">
                        <label htmlFor="login-password">Password </label>
                        <input required type="text" id="login-password" ref={signup_password}></input>
                    </div>
                    <div className="cell">
                        <label htmlFor="channel-name">Channel Name </label>
                        <input required type="text" id="channel-name" ref={channel_name}></input>
                    </div>
                    <button type="submit">Sign up</button>
            </form>
        </div>
    )
}

export default EverythingUserRelated
import { auth } from "../../firebase";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth"
import { createUserWithEmailAndPassword, GithubAuthProvider } from "firebase/auth" 
import { useEffect, useRef } from "react";
import { useContext } from "react";
import { userContext } from "../utils/contexts";
import { addDoc, collection, getDoc, setDoc, doc, query, where, 
    getDocs, updateDoc, arrayRemove, arrayUnion } from "@firebase/firestore";
import { firestore } from "../../firebase";


const get_object = (channel_name, first, last, uid, profile_url = null) => {
    return {
        uid : uid, 
        first_name: first, 
        last_name: last, 
        channel_name: channel_name, 
        avatar: profile_url, 
        playlists: {
            watch_later: [], 
            favorites: [], 
            likes: [], 
            history: [], 
            subscriptions: [], 
        }
    }
}


function EverythingUserRelated () {

    const login_email = useRef(); 
    const login_password = useRef() ; 
    const signup_email = useRef() ; 
    const signup_password = useRef() ; 
    const channel_name = useRef() ; 
    const first_name = useRef() ; 
    const last_name = useRef() ; 
    const taken_message = useRef() ; 
    const channel_name_github = useRef() ; 

    const {userID, setUserId} = useContext(userContext) ; 

    const users_collection = collection(firestore, "users") ; 


    const signup = async (e) => {
        e.preventDefault() ;

        try {
            const q = query(users_collection, where("channel_name", "==", "dopename")) ; 
            const querySnapshot = await getDocs(q);
            if (querySnapshot.size != 0) {return} // throw error routine 
            const userCredential = await createUserWithEmailAndPassword(auth, signup_email.current.value, signup_password.current.value) ; 
            let uid = userCredential.user.uid ; 
            setUserId(uid) ; 
            await setDoc(doc(firestore, "users", uid), 
            get_object(channel_name.current.value, first_name.current.value, last_name.current.value, uid)) ;
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
            setUserId(userCredential.user.uid) ; 
        }
        catch (error){
            console.log(error) ; 
        }
    }

    const use_github = async (e) => {
        e.preventDefault() ; 
        let provider = new GithubAuthProvider() ; 
        try {
            // first check if account exists

            const sign_in = await signInWithPopup(auth, provider) ;
            console.log(sign_in)
            let uid = sign_in.user.uid ;  
            let avatar = sign_in.user.photoURL ; 
            console.log(uid)
            const check_if_account_exists = query(users_collection, where("uid", "==", `${uid}`))
            const exists_snapshot = await getDocs(check_if_account_exists) ; 
            // if account does not exist in firestore, create it 
            if (exists_snapshot.size == 0){
                // check if channel_name exists 
                // const q = query(users_collection, where("channel_name", "==", `${channel_name_github.current.value}`)) ; 
                // const querySnapshot = await getDocs(q);
                // if (querySnapshot.size != 0) {alert("Channel Name Taken") ; return }  // throw error routine 
                const [first, last] = sign_in.user.displayName.split(" ") ; 
                await setDoc(doc(firestore, "users", `${uid}`), 
                get_object(channel_name_github.current.value, first, last, uid, avatar)) ;
            }
            setUserId(uid) ; 
        } 
        catch (e) {
            console.log(e) ; 
            console.log("nothing happened") ; 
        }
    }

    useEffect( () => {
        console.log(userID)
    }, [userID])


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
                        <label htmlFor="name">First Name </label>
                        <input required type="text" id="name" ref={first_name}></input>
                    </div>
                    <div className="cell">
                        <label htmlFor="name">Last Name </label>
                        <input required type="text" id="name" ref={last_name}></input>
                    </div> 
                    <div className="cell">
                        <label htmlFor="login-email">Email </label>
                        <input required type="email" id="login-email" ref={signup_email}></input>
                    </div>
                    <div className="cell">
                        <label htmlFor="login-password">Password </label>
                        <input required type="text" id="login-password" ref={signup_password}></input>
                    </div>
                    <div className="channel-cell">
                        <label htmlFor="channel-name">Channel Name </label>
                        <input required type="text" id="channel-name" ref={channel_name}></input>
                        <div ref={taken_message} id="display-taken-message">Channel Name Taken, please choose a different one</div>
                    </div>
                    <button type="submit">Sign up</button>
            </form>
            <form onSubmit={use_github}>
                <label htmlFor="channel-name">Channel Name </label>
                <input required type="text" id="channel-name" ref={channel_name_github}></input>
                <button type="submit">Github</button>
                
            </form>
        </div>
    )
}

export default EverythingUserRelated
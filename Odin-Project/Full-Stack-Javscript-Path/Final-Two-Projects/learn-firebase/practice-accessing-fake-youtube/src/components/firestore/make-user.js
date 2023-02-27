import { firestore } from "../../firebase";
import { addDoc, collection, getDoc, setDoc, doc } from "@firebase/firestore";
import { useRef } from "react";

function MakeUser () {

    const make_a_user = async (e) => {
        e.preventDefault() ; 
        let email = get_object() ; 
        console.log(email)
    }

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

    const email = useRef() ; 
    const password = useRef() ; 
    const confirm_password = useRef() ;
    const channel_name = useRef() ; 


    return (
        <form className="make-user" onSubmit={make_a_user}>
             <div>
                <label htmlFor="input-item">Email </label>
                <input type="email" ref={email}/> 
            </div>
            <div>
                <label htmlFor="input-item">Password </label>
                <input type="password" ref={password}/> 
            </div>
            <div>
                <label htmlFor="input-item">Confirm Password </label>
                <input type="password" ref={confirm_password}/> 
            </div>
            <div>
                <label htmlFor="input-item">Username </label>
                <input type="text" ref={channel_name}/> 
            </div>
            <div>
                <h1>Choose avatar</h1>
                <div className="wrap-avatars">

                </div>
                <h1>Upload Your Own</h1>
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}



export default MakeUser
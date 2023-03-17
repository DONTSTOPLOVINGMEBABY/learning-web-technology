import {doc, getDoc, collection, getDocs, updateDoc, increment, arrayRemove, arrayUnion, query, where} from "@firebase/firestore"
import { useEffect, useRef, useState, useContext } from "react";
import { firestore } from "../../firebase/firebase"
import { userContext } from "../utils/contexts";
import "../../styles/play-video.css"
import notActiveLikeButton from "../assets/not-active-like.svg"
import notActiveDislikeButton from "../assets/not-active-dislike.svg"
import activeLikeButton from "../assets/active-like.svg"
import activeDislikeButton from "../assets/active-dislike.svg"

function Comments (props) {


    const [commentsArray, setCommentsArray] = useState() ; 
    const [liked, setLiked] = useState(false) ; 
    const [disliked, setDisliked] = useState(false) ; 
    const [activeReply, setActiveReply] = useState(false) ; 
    const [activeInput, setActiveInput] = useState(false) ; 
    const {user, setUser} = useContext(userContext) ; 

    const replyInput = useRef() ; 

    const activate_comment_reply = () => {if (!activeReply) {setActiveReply(true)}}
    const deactive_comment_reply = () => {setActiveReply(false)} ; 
    
    const orderCommentsByDate = () => { 
        let convert_object_to_array = Object.keys(props.comments).reverse() ; 
        setCommentsArray(convert_object_to_array[0])
    }

    const pretty_print_date = (timestring) => {
        const date = new Date(timestring); 
        const day = ("0" + date.getDate()).slice(-2); 
        const month = ("0" + (date.getMonth() + 1)).slice(-2); 
        const year = date.getFullYear().toString().slice(-2); 
        return `${month}/${day}/${year}`;
    }

    const enter_reply = () => {
        let string = replyInput.current.value.trimStart() ; 
        if (string){setActiveInput(true)} 
        else {
            setActiveInput(false) ; 
            replyInput.current.value = '' ; 
        }
    }

    const make_reply = (userid, date, comment, avatar, name) => {
        return {
            uid : userid, 
            date : date, 
            comment : comment, 
            users_profile_id : avatar, 
            users_name : name, 
        }
    }

    const reply_to_comment = async (comment_title_on_server) => {
        let now = new Date().getTime() ; 
        let reply_comment = make_reply(user.uid, now, 
            replyInput.current.value, user.profile_url, `${user.first_name} ${user.last_name}`)
        let comment_ref = doc(firestore, "videos", props.video_title) ; 
        let comment_doc = await getDoc(comment_ref) ; 
        let address_for_union = `comments.${comment_title_on_server}.replies`
        await updateDoc( comment_ref, {
            [address_for_union] : {[`${user.uid}_${now}`] : reply_comment}, 
        })
        replyInput.current.value = '' ; 
        // Use props.setState to update comment replies
    }

    const like_a_comment = async () => {

    }

    // Going to need to map over and create individual comment components, and individual reply components. 
    


    // useEffect( () => {
    //     console.log(commentsArray) ; 
    // }, [commentsArray])

    useEffect( () => {
        orderCommentsByDate() ; 
    }, [props.comments])

    


    
    return (
        <div id="load-all-comments">
            { commentsArray ? 
                <div className="individual-comment">
                    <img id="comment-profile-avatar" src={props.comments[commentsArray].users_profile_id} alt="profile-picture"/>
                    <div className="comments-likes-and-replies">
                        <div className="name-and-date-comments">
                            <span className="display-name-comments">{props.comments[commentsArray].users_name}</span>
                            <span className="display-date-comments">{pretty_print_date(props.comments[commentsArray].date)}</span>
                        </div>
                        <div className="comment-renderer">
                            {props.comments[commentsArray].comment}
                        </div>
                        <div className="like-reply-to-comment">
                            <div className="interact-element-styling-comments margin-right-comment-like-button">
                                <img id="like-dislike-comment" src={ liked ? activeLikeButton : notActiveLikeButton }/>
                                <span id="comment-likes">{props.comments[commentsArray].likes}</span>
                            </div>
                            <div className="interact-element-styling-comments">
                                <img id="like-dislike-comment" src={ disliked ? activeDislikeButton : notActiveDislikeButton }/>
                            </div>
                            <button onClick={activate_comment_reply} id="reply-to-comment-button">Reply</button>
                            {activeReply ? 
                                <div className="active-comment-reply">
                                    <input id="comment-reply" type="text" ref={replyInput} onChange={enter_reply} placeholder="Leave a Reply..."/>
                                    { activeInput ? <button onClick={ () => reply_to_comment(commentsArray)} id="send-reply-to-comment">Comment</button> : 
                                    <button onClick={deactive_comment_reply} id="cancel-reply-to-comment-button">Cancel</button>} 
                                </div> : null}
                        </div>
                    </div>
                </div>
            : null
            }   
            
        </div>
    )
}

export default Comments

/* 

*/
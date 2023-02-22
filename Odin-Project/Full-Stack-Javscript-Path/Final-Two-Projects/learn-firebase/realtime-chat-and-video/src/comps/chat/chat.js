import { useRef, useState } from "react"
import "../../styles/chat.css"
import { app } from "../../firebase";
import { ref, set, onValue, onChildAdded, getDatabase, push } from "firebase/database"

// first add new message to list of key value message pairs
//      time stamp: message 
// then look through everything with onChildAdded and stick it to the 
// end of the chat


function Chat () {

    const name = useRef() ; 
    const message = useRef() ; 
    const db = getDatabase() ; 
    const commentsRef = ref(db, "chat-comments")
    const [chatStuff, setChatStuff] = useState({}) ; 
    const [listChatStuff, setListChatStuff] = useState([]) ; 

    const add_message = () => {
        const newPostRef = push(commentsRef); 
        set (newPostRef, {
            [Date.now()] : {
            [name.current.value] : message.current.value 
            }
        })
    }

    onChildAdded(commentsRef, (data) => {
        if (!chatStuff[data.key]){
            setChatStuff({[data.key] : data.val(), ...chatStuff, })
            setListChatStuff([data.key, ...listChatStuff])
            // console.log(chatStuff, listChatStuff)
        }
        // console.log(data.key)
        // console.log(data.val())
        // console.log("type", Object.keys.length)
        // console.log(data)
       
    })

    listChatStuff.map( (item) =>{
        console.log(item, chatStuff[item])
        console.log(Object.keys(chatStuff[item]))
    })
    

    return (
        <div className="chat">
            <div className="enter-message">
                <label htmlFor="Name">Name</label>
                <input id="Name" ref={name}/>
                <label htmlFor="Message">Message</label>
                <input id="Message" ref={message}/>
                <button onClick={add_message}>Submit Message</button>
            </div>
            <div className="display-chat">
                {listChatStuff.map( (item) =>{
                    let thing = Object.keys(chatStuff[item]) ; 
                    let sender = Object.keys(chatStuff[item][thing])
                    sender = sender[0] ; 
                    let message = chatStuff[item][thing][sender] ;
                    console.log(sender, message) 
                    return <div className="shift">
                        <h1>{sender}</h1>
                        <div>{message}</div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Chat
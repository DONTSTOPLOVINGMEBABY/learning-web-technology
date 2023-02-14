import React, { useRef } from "react";
import {firestore} from "../firebase"
import { addDoc, collection, getDocs,  } from "@firebase/firestore";

function Home () {

    const messageRef = useRef() ; 
    const ref = collection(firestore, "messages") ; 

    const handleSave = async(e) => {
        e.preventDefault() ; 
        console.log(messageRef.current.value)
        if (messageRef.current.value.replace('/\s/g', '') == ''){return}

        let data = {
            message: messageRef.current.value, 

        }
        try{
            addDoc(ref, data) ;
        } catch(e){
            console.log(e) ; 
        }
    }

    const logAllQueries = async (e) => {
        const querySnapshot = await getDocs(collection(firestore, "messages")) ; 
        querySnapshot.forEach( (doc) => {
            console.log(doc)
            console.log(`${doc.id} => ${doc.data()}`);
            console.log(doc.data())
        }) 
    }


    return <div>
        <form onSubmit={handleSave}>
              <label>Enter something insightful</label>
              <input type="text" ref={messageRef} />
              <button type="submit">Save</button>
              <button onClick={logAllQueries}>Log all queries in Collection</button>
        </form>  
    </div>
}

export default Home
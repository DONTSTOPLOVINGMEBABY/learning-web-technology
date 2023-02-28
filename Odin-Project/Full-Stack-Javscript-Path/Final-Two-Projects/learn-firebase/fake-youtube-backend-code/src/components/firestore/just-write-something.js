import { firestore } from "../../firebase";
import { addDoc, collection, getDoc, setDoc, doc, getDocs, updateDoc, arrayRemove, arrayUnion } from "@firebase/firestore";


function WriteAnything () {

    const ref = collection(firestore, "users") ; 
    let some_data = {
        let_it : "rock", 
        your: "socks-off", 
        nested: {rockem: "sockem", i_love: "snickers"}, 
        something_here : [33, "one", "two", 1, false] , 
    } 


    const run = async () => {
        // console.log(users) ; 
        try {
            // addDoc(ref, some_data)
            // ref.doc("Big-Hankus").set(some_data) ; 
            await setDoc(doc(firestore, "users", "big-Hankus"), some_data) ;
            await setDoc(doc(firestore, "users", "bogus"), ["a big string", "another string"]) ;  
            console.log("bluetooth-device-connected-successfully") ; 
        }
        catch (error) {
            console.log(error) ;
        }
    }
    
    const update = async () => {
        const document_reference = doc(firestore, "users", "big-Hankus") ; 
        await updateDoc(document_reference, {
            "let_it" : "rock-even-more", 
            "nested.i_love" : "pie", 
            "something_here" : arrayUnion("pickles"), 
            "something_here" : arrayRemove(false) , 
        })
    }


    /*  Update specific fields in documents
    
        // Create an initial document to update.
        const frankDocRef = doc(db, "users", "frank");
        await setDoc(frankDocRef, {
            name: "Frank",
            favorites: { food: "Pizza", color: "Blue", subject: "recess" },
            age: 12
        });

        // To update age and favorite color:
        await updateDoc(frankDocRef, {
            "age": 13,
            "favorites.color": "Red"
        });
    */


    /* 

    Create new document in collection cities with name "LA"

    await setDoc(doc(db, "cities", "LA"), {
    name: "Los Angeles",
    state: "CA",
    country: "USA"
    });

    */



    return (
        <div className="write-something">
            <button onClick={run}>Write and check console</button>
            <button onClick={update}>Update specific fields</button>
        </div>
    )
}

export default WriteAnything
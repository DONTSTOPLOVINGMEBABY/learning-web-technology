import React, { useRef, useState } from "react";
import {firestore} from "../firebase"
import { addDoc, collection, getDoc, setDoc, doc } from "@firebase/firestore";

function Home2 () {

    const usernameRef = useRef() ; 
    const passwordRef = useRef() ; 
    const firstRef = useRef() ;
    const middleRef = useRef() ;
    const lastRef = useRef() ;
    const dobRef = useRef() ;
    const fetchUser = useRef() ; 
    const users = collection(firestore, "users") ; 

    const [username, setUsername] = useState("") ; 
    const [password, setPassword] = useState("") ;  
    const [firstName, setFirstName] = useState("") ; 
    const [middleName, setMiddleName] = useState("") ; 
    const [lastName, setLastName] = useState("") ; 
    const [dob, setDob] = useState("") ; 
    const [display_info, setDisplay_info] = useState(false) ; 


    const handleForm = async (e) => {
        e.preventDefault() ; 

        const userDocRef = doc(users, usernameRef.current.value) ; 

        const docRef = doc(firestore, "users", usernameRef.current.value) ; 
        const docSnap = await getDoc(docRef) ; 

        if (docSnap.exists()){
            alert("Profile for Username Already Exists!")
            return ; 
        }

        let data = {
            userData: {
                username: usernameRef.current.value, 
                password: passwordRef.current.value, 
            }, 
            personalInfo: {
                firstName: firstRef.current.value, 
                middleName: middleRef.current.value, 
                lastName: lastRef.current.value,
                dob: dobRef.current.value,  
            }, 
        } 

        const handleSave = async (e) => {
            try {
                await setDoc(userDocRef, data)
                usernameRef.current.value = "" ;  
                passwordRef.current.value = "" ; 
                firstRef.current.value = "" ; 
                middleRef.current.value = "" ;  
                lastRef.current.value = "" ;
                dobRef.current.value = "" ; 
            } catch (e) {
                console.log(e) 
            }
        }
        handleSave()  ;
    } 

    const fetch_user = async (e) => {
        e.preventDefault(); 
        const docRef = doc(firestore, "users", fetchUser.current.value) ; 
        const docSnap = await getDoc(docRef) ; 

        if (docSnap.exists()) {
            let retrieved_data = docSnap.data() ; 
            setFirstName(retrieved_data.personalInfo.firstName)
            setMiddleName(retrieved_data.personalInfo.middleName)
            setLastName(retrieved_data.personalInfo.lastName)
            setDob(retrieved_data.personalInfo.dob)
            setDisplay_info(true) ; 
          } else {
            alert("No such user exists")
          }
    }   

    function randomNum () {
        return Math.floor(Math.random() * 256) ; 
    }


    return ( 
        <div className="bigjawn">
            <form id="thang1" onSubmit={handleForm}>
                <div className="cell">
                    <label htmlFor="username">Username </label>
                    <input type="text" id="username" required ref={usernameRef} />
                </div>
                <div className="cell">
                    <label htmlFor="password">Password </label>
                    <input type="password" id="password" required ref={passwordRef} />
                </div>
                <div className="cell">
                    <label htmlFor="first">First </label>
                    <input type="text" id="first" required ref={firstRef} />
                </div>
                <div className="cell">
                    <label htmlFor="middle">Middle </label>
                    <input type="text" id="middle" required ref={middleRef} />
                </div>
                <div className="cell">
                    <label htmlFor="last">Last </label>
                    <input type="text" id="last" required ref={lastRef} />
                </div>
                <div className="cell">
                    <label htmlFor="dob">DOB </label>
                    <input type="date" id="dob" required ref={dobRef} />
                </div>
                <button type="submit">Push it to the cloud</button>
            </form>

            <form id="thang2" onSubmit={fetch_user}>
                <div className="cell">
                    <label htmlFor="fetch_data">Fetch data for User: </label>
                    <input type="text" id="fetch_data" required ref={fetchUser} />
                    <button>Click to fetch user</button>
                </div>
            </form>


            { !display_info ? null : <div className="display-info">
                <h1 style={{ color: `rgb(${randomNum()}, ${randomNum()}, ${randomNum()})` }}>{firstName}</h1>
                <h1 style={{ color: `rgb(${randomNum()}, ${randomNum()}, ${randomNum()})` }}>{middleName}</h1>
                <h1 style={{ color: `rgb(${randomNum()}, ${randomNum()}, ${randomNum()})` }}>{lastName}</h1>
                <h1 style={{ color: `rgb(${randomNum()}, ${randomNum()}, ${randomNum()})` }}>{dob}</h1>
            </div> } 

        </div>
    )



}

export default Home2 ; 


// Create a New User 
// Username
// Password
// First
// Middle 
// Last 
// DOB
// 


/* 
if (docSnap.exists()) {
            let existing_data = docSnap.data() ;    
            data = {
                one: "Two", 
                loving_frog: "Loving_dog", 
                ...existing_data, 
                one_more: {
                    ...existing_data.one_more, 
                    nice: "rock", 
                }
            } 
            console.log("Whaaa")
            console.log(existing_data)
        } else {
            data = {
                one: "Two", 
            }
        }
*/ 
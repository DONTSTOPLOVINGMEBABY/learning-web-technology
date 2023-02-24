import { storage } from "../../firebase";
import {ref, uploadBytes, listAll, getDownloadURL} from "firebase/storage" 
import { useEffect, useState } from "react";



function MorePractice () {

    const videoRef = ref(storage, "memes/") ; 
    const video_links = useState([]) ; 
    console.log(videoRef) ; 

    useEffect( () => {
        listAll(videoRef).then( (data) => {
            console.log(data)
                data.items.forEach( (item) =>{
                    console.log(item)
                })
        })
    }, [])


    return <div>Mas practice!</div>
}

export default MorePractice 
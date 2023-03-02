import { storage } from "../../firebase";
import {ref, uploadBytes, listAll, getDownloadURL} from "firebase/storage" 
import { useState, useEffect } from 'react';
import RenameFiles from "./rename-files";

function DisplayContent () {

    const memes_ref = ref(storage, "memes/") ; 
    const [allMemes, setAllMemes] = useState([]) ; 
    const [url, setUrl] = useState(null)
    


    // useEffect(() => {
    //     async function async_task (){
    //         const data = await listAll(memes_ref) ; 
    //         const close = [] ; 
    //         await Promise.all(
    //             data.items.map( async (item) => {
    //                 let thing = await getDownloadURL(item) ;
    //                 close.push(thing) ; 
    //             })
    //         )
    //         setAllMemes([...close]) ; 
    //     }
    //     async_task() ; 
    // }, [])

    useEffect( () => {
        console.log(allMemes)
    }, [allMemes])
    

    async function play_video () {
    }

    const get_specific_url = async () => {
        const specific_ref = ref(storage, "memes/Funniest Laugh Ever.mp4") ; 
        const specific_download_url = await getDownloadURL(specific_ref) ; 
        console.log(specific_download_url) ; 
        setUrl(specific_download_url) ; 
    }

    useEffect( () => {
        console.log(url); 
    }, [url])

    return (
        <div className="display-content">
            {/* { allMemes.map( (meme_video) => {
                return <div className="video-container" key={meme_video}>
                    <video 
                    controls
                    >
                    <source src={meme_video} type="video/mp4"/>    
                    </video> 
                </div>
            })} */}
            <button onClick={get_specific_url}>Grab Video</button>
            { url ? <>
            <video 
            controls
            >
            <source src={url} type="video/mp4"/>    
            </video> 
            </> 
            : null    
            }
            <RenameFiles/> 
        </div>
    )
}

export default DisplayContent ; 
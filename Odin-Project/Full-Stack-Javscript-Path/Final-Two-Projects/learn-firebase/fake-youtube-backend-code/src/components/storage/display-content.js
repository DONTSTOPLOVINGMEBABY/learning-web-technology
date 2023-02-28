import { storage } from "../../firebase";
import {ref, uploadBytes, listAll, getDownloadURL} from "firebase/storage" 
import { useState, useEffect } from 'react';

function DisplayContent () {

    const memes_ref = ref(storage, "memes/") ; 
    const [allMemes, setAllMemes] = useState([]) ; 

    useEffect(() => {
        async function async_task (){
            const data = await listAll(memes_ref) ; 
            const close = [] ; 
            await Promise.all(
                data.items.map( async (item) => {
                    let thing = await getDownloadURL(item) ;
                    close.push(thing) ; 
                })
            )
            setAllMemes([...close]) ; 
        }
        async_task() ; 
    }, [])

    useEffect( () => {
        console.log(allMemes)
    }, [allMemes])
    

    async function play_video () {
    }

    return (
        <div className="display-content">
            { allMemes.map( (meme_video) => {
                return <div className="video-container" key={meme_video}>
                    <video 
                    controls
                    >
                    <source src={meme_video} type="video/mp4"/>    
                    </video> 
                </div>
            })}
        </div>
    )
}

export default DisplayContent ; 
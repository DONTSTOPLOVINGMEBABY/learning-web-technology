import { useParams, useLocation } from "react-router-dom"
import { storage, firestore } from "../../firebase/firebase";
import {doc, getDocs, getDoc, collection, query, where} from "@firebase/firestore"
import { ref, getDownloadURL } from "firebase/storage";

import { useState } from "react";
import "../../styles/play-video.css"

function PlayVideo () {

    const [sideVideos, setSideVideos] = useState([]) ; 
    const location = useLocation() ;  

    const channel_information = location.state.channel_information ; 
    const video_information = location.state.video_information ; 
    const video_time = location.state.video_time ; 
    const download_url = location.state.download_url ; 


    const load_side_videos = async () => { 
        let hold_category_videos = [], rest_videos = [], all_videos = [] ;  
        const videos_collection = collection(firestore, "videos") ; 
        const categories_query = query(videos_collection, where("category", "==", `${video_information.category}`)) ; 
        const categories_snapshot = await getDocs(categories_query) ; 
        categories_snapshot.forEach( (shot) => {hold_category_videos.push(shot.id.replace(/_/g, "/"))}) 
        // Grab rest of the videos  
        const docsnap = (await getDocs(videos_collection)).docs ; 
        docsnap.forEach( (data) => {
          rest_videos.push(data.id.replace(/_/g, '/'))
        }) 
        while (hold_category_videos.length + all_videos.length < 10){
            let random_number = Math.floor(Math.random() * (rest_videos.length - 1)) ; 
            if (!all_videos.includes(rest_videos[random_number]) && !hold_category_videos.includes(rest_videos[random_number])) 
            {all_videos.push(rest_videos[random_number])}
        }
        console.log(hold_category_videos, all_videos)
    }

    load_side_videos() ; 

    
    return (
        <div className="HomePage PlayVideo">
            <div className="left-side">
                <div className="big-video-container">
                    <video id="play-big-video" controls>
                        <source src={download_url} type="video/mp4"/>
                    </video>
                </div>
            </div>
            <div className="right-side">

            </div>            
        </div>
    )
}

export default PlayVideo 
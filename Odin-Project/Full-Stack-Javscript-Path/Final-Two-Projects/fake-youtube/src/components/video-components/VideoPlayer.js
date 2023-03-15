import { useLocation } from "react-router-dom"
import { storage, firestore } from "../../firebase/firebase";
import {doc, getDocs, getDoc, collection, query, where} from "@firebase/firestore"
import { ref, getDownloadURL } from "firebase/storage";
import PreviewPlayer from "./preview-player";
import Subscribe from "../content-interaction-components/subscribe";
import LikeDislike from "../content-interaction-components/like-dislike";
import { useEffect, useState } from "react";
import "../../styles/play-video.css"

function PlayVideo () {

    const [sideVideos, setSideVideos] = useState([]) ; 
    const [sideVideoObject, setSideVideoObject] = useState({}) ;
    const [profileUrl, setProfileUrl] = useState(null) ;  
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
        hold_category_videos = hold_category_videos.filter(item => item.split("/")[2] != `${video_information.title}`)

        while (hold_category_videos.length + all_videos.length < 10){
            let random_number = Math.floor(Math.random() * (rest_videos.length - 1)) ; 
            if (!all_videos.includes(rest_videos[random_number]) && !hold_category_videos.includes(rest_videos[random_number]) && 
            video_information.title != rest_videos[random_number].split("/")[2]) 
            {all_videos.push(rest_videos[random_number])}
        }
        // Get Download Links
        let all_together = [...hold_category_videos, ...all_videos] ; 
        
        let download_links = await Promise.all( 
            all_together.map( async (name) => {
                let download_ref = ref(storage, name) ; 
                return await getDownloadURL(download_ref) ; 
            })
        )
        // Lob it all into an object
        let names_and_links_object = {} ; 
        all_together.map( (name, index) => {
            names_and_links_object[name] = download_links[index] ; 
        })

        setSideVideos(all_together) ; 
        setSideVideoObject(names_and_links_object)
    }

    const grab_profile = async ( ) => {
        let profileRef = ref(storage, channel_information.avatar) ; 
        let url = await getDownloadURL(profileRef) ;
        setProfileUrl(url)
    }

    useEffect( () => {
        load_side_videos() ;
        grab_profile() ; 
        console.log(channel_information)
        console.log()
    }, [])
    
    return (
        <div className="HomePage PlayVideo">
            <div id="specific" className="left-side">
                <div className="big-video-container">
                    <video id="play-big-video" controls>
                        <source src={download_url} type="video/mp4"/>
                    </video>
                </div>
                <div id="video-descriptions">
                    <div className="description-title">{video_information.title.split(".")[0]}</div>
                    <div className="description-lower-half">
                        <div id="owner">
                            <div id="owner-info">
                                <img id="owner-profile-picture" src={profileUrl} alt="Profile-Picture" />
                                <div id="owner-name-sub-count">
                                    <div id="owner-name">{channel_information.channel_name}</div>
                                    <div id="owner-sub-count">{channel_information.subscribers} subscribers</div>
                                </div>
                            </div>
                            <Subscribe current_channel={channel_information.channel_name}/> 
                        </div>
                        <div id="lower-half-right">
                            <div id="lower-half-right-inner">
                                <LikeDislike 
                                title={video_information.title} 
                                /> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="right-side">
                { sideVideoObject && sideVideos && false && sideVideos.map( (name) => { 
                    return ( 
                    <PreviewPlayer
                    className="play-video-main-class"
                    main_container="play-video-main-container"
                    video_class="play-video-video"
                    video_information="play-video-video-information"
                    profile_picture="play-video-profile-picture"
                    profile_photo="play-video-recommended-profile-picture"
                    other_information="play-video-other-information"
                    video_title="play-video-title"
                    video_channel="play-video-channel"
                    views="play-video-sidebar-views"
                    date="play-video-sidebar-date"
                    group="play-video-group"
                    video={sideVideoObject[name]}
                    title={name}
                    key={name}
                    play={false}
                    /> )
                })}
            </div>            
        </div>
    )
}

export default PlayVideo 
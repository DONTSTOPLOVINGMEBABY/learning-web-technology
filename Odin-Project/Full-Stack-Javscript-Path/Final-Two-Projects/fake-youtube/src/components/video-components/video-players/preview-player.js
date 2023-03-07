import { firestore, storage } from "../../../firebase/firebase";
import {doc, getDocs, getDoc, collection, query, where} from "@firebase/firestore" 
import { useEffect, useRef, useState } from "react"
import { ref, getDownloadURL } from "firebase/storage";


function PreviewPlayer (props) {

    const [videoInformation, setVideoInformation] = useState({}) ; 
    const [channelInfo, setChannelInfo] = useState(null) ; 
    const [profileURL, setProfileURL] = useState(null) ; 
    const [uploadTimeDifferece, setUploadTimeDifference] = useState(null) ; 
    const videoRef = useRef() ; 

    const grab_profile_photo = async () => {
        const profile_reference = ref(storage, channelInfo.avatar) ; 
        const link = await getDownloadURL(profile_reference) ;
        setProfileURL(link) ; 
    }

    const calculate_date_difference = () => {
        const upload_date = new Date(videoInformation.upload_date) ; 
        const current_date = new Date() ; 
        let time_difference = upload_date.getTime() - current_date.getTime();
        let day_difference = Math.abs(Math.ceil(time_difference / (1000 * 3600 * 24)));
        setUploadTimeDifference(day_difference) ; 
    }

    const get_video_info = async () => {
        const doc_name = props.title.replace(/\//g, "_") ; 
        const document_reference = doc(firestore, "videos", `${doc_name}`) ; 
        const information = await getDoc(document_reference) ; 
        const data = information.data() ; 
        setVideoInformation(data) ;  
    }

    const get_channel_information = async (channel_name) => {
        const users_collection = collection(firestore, "users") ; 
        const query1 = query(users_collection, where("channel_name", "==", `${channel_name}`)) ; 
        let data = await getDocs(query1) ; 
        data = data.docs[0].data() ; 
        setChannelInfo(data) ; 
    }

    const playVideo = () => {
        videoRef.current.play() ; 
    }

    const pauseVideo = () => {
        videoRef.current.pause() ;
    }

    useEffect( () => {
        get_video_info() ; 
        const channel = props.title.split("/")[1] ; 
        get_channel_information(channel) ; 
    }, [])

    useEffect( () => {
        grab_profile_photo() ; 
        calculate_date_difference() ; 
    }, [channelInfo])


    return (
        <div className={props.className} onMouseEnter={playVideo} onMouseLeave={pauseVideo}>
            {  profileURL ? <>
                <div className="video-container">
                    <video className="video" ref={videoRef} muted>
                        <source src={props.video} type="video/mp4"/>
                    </video>
                </div>
                <div className="video-information">
                    <div className="profile-picture">
                        <img id="profile-photo" src={profileURL} alt="avatar"/>
                    </div>
                    <div className="other-information">
                        <div className="video-title">{videoInformation.title.split(".")[0]}</div>
                        <div className="channel-name">{videoInformation.creator}</div>
                        <div className="group">
                            <div className="views">{videoInformation.view_count} views &#183; </div>
                            <div className="upload-date"> {uploadTimeDifferece} days ago</div>
                        </div>
                    </div>
                </div>
                </>
                : null
            }  
        </div>

    )
}

export default PreviewPlayer
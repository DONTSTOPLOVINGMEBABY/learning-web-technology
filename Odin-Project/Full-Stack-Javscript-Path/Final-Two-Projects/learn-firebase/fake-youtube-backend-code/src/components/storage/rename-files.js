import { storage, firestore } from "../../firebase";
import {ref, uploadBytes, listAll, getDownloadURL} from "firebase/storage" 
import {collection, setDoc, doc, updateDoc, arrayUnion} from "@firebase/firestore"

export default function RenameFiles () {

    const make_video_object = (category, title, creator, description, upload_date) => {
        return {
            category : category, 
            view_count : 0, 
            likes : 0, 
            dislikes : 0, 
            comments : [], 
            creator : creator , 
            description : description, 
            upload_date : upload_date, 
            title: title, 
        }
    }



    const categories_collection = collection(firestore, "video-categories") ; 

    const create_new_category = async () => {
        const specific_ref = ref(storage, "Uploads/Tranquil Scenes") ; 
        try {
            let temp_hold = [] ; 
            const data = await listAll(specific_ref) ; 
            data.items.forEach( (item) => {temp_hold.push(item.fullPath)}) 

            await Promise.all(
                temp_hold.map( async (item) => {
                    item = item.replace(/\//g, '_');
                    let full_string = item.split("_") ;  
                    let uploader = full_string[1] ; 
                    let title = full_string[2] ;  
                    const description = "Finding Tranquility in Nature :D " ; 
                    const currentDate = new Date();
                    const month = currentDate.getMonth() + 1;
                    const day = currentDate.getDate();
                    const year = currentDate.getFullYear();
                    const full_date = `${month}/${day}/${year}` ; 
                    const category = "Nature" ; 
                    await setDoc(doc(firestore, "videos", `${item}`), 
                    make_video_object(category, title, uploader, description, full_date))
                    console.log(make_video_object(category, title, uploader, description, full_date)) ; 
                    console.log("hello")
                })
            )
        } catch (error) {
            console.log(error)
        }
    }

    console.log("hi")

    const make_default_profile_objects = (channel_name, avatar) => {
        return {
            total_channel_views : 0, 
            channel_name : channel_name, 
            subscribers : 0, 
            avatar : avatar,  
        }
    }




    const assign_default_channels_user_profs = async () => {
        try {
            const uploads_ref = ref(storage, "Uploads") ; 
            const data = await listAll(uploads_ref) ; 
            Promise.all(
                data.prefixes.map( async (item) => {
                    const [hello, channel_name] = item.fullPath.split("/") ;
                    console.log(channel_name) ; 
                    let avatar = channel_name.replace(/ /g, '-') ; 
                    avatar = "https://henryjacobs.us/hold-assets-for-web-apps/fake-youtube-default-profiles/" + avatar ; 
                    console.log(avatar) ; 
                    await setDoc(doc(firestore, "users", `${channel_name}`), 
                    make_default_profile_objects(channel_name, avatar)) ; 
                })
            )
        } catch (error) {
            console.log("no way")
        }
    }




    return (
        <div style={{display : "flex", flexDirection : "column"}}>
            <button onClick={console.log("nada")}>Create-New-Firestore-Thing</button>
            <button onClick={assign_default_channels_user_profs}>Assign Default Channels User Profiles</button>
        </div>
    )
}
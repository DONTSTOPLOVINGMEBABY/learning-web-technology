import "../../styles/homepage.css"
import PreviewPlayer from "./video-players/preview-player";
import { storage, firestore } from "../../firebase/firebase";
import {doc, getDocs, getDoc, collection, query, where} from "@firebase/firestore" 
import {ref, uploadBytes, listAll, getDownloadURL} from "firebase/storage" 
import { useEffect, useState } from "react";

function HomePage() {

  const cheap_video = ref(storage, "Uploads/Everything Planes/Crazy plane landing.mp4")
  const [cheapUrl, setCheapUrl] = useState(null) ; 

  const [allURLs, setallURLs] = useState([]) ; 

  const one_time = async () => {
    const temp_names = [] ; 
    const final_names = [] ; 
    const refs = [] ; 
    const videos = collection(firestore, "videos") ; 
    const docsnap = (await getDocs(videos)).docs ; 
    docsnap.forEach( (data) => {
      temp_names.push(data.id.replace(/_/g, '/'))
    }) 
    
    while (final_names.length < 10){
      let random_number = Math.floor(Math.random() * (temp_names.length - 1)) ; 
      final_names.push(temp_names[random_number]) ; 
    }
    const temp = [] ; 
    Promise.all(final_names.map( async (item) => {
      let single_ref = ref(storage, item) ; 
      let url = await getDownloadURL(single_ref) ; 
      temp.push(url) ; 
    }))
  }

  useEffect( () => {
    one_time() ; 
    return_url() ; 
  }, [])

  const return_url = async () => {
    const url = await getDownloadURL(cheap_video) ; 
    setCheapUrl(url) ; 
  }

  useEffect( () => {
    console.log(allURLs) ; 
    console.log(allURLs.length) ; 
  }, [allURLs])


  return (
    <div className="HomePage Home">
      { cheapUrl ? 
        <PreviewPlayer 
        className="home-page-player"
        video={cheapUrl} 
        title="Uploads/Everything Planes/Crazy plane landing.mp4"
        /> : null }
       
    </div>
    
  );
}

export default HomePage;

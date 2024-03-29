/* This example is from pedro-tech's youtube video.
The link for the video is the following:
https://www.youtube.com/watch?v=YOAeBSCkArA&ab_channel=PedroTech
*/ 

import './App.css';
import storage from './firebase';
import { useState, useEffect } from 'react';
import {ref, uploadBytes, listAll, getDownloadURL, uploadBytesResumable} from "firebase/storage" 
import { v4 } from 'uuid';

function App() {

  const [imageUpload, setImageUpload] = useState(null) ; 
  const [imageList, setImageList] = useState([]) ; 
  const imagesRef = ref(storage, "images/")

  const uploadImage = async () => {
    if (imageUpload == null){return} 
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`) ; 
    const uploadTask = uploadBytesResumable(imageRef, imageUpload) ; 

    uploadTask.on( 'state_changed', (snapshot) =>{
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log(progress) ; 
    })

  }

  useEffect( () => {
    listAll(imagesRef).then( (data) => {
      data.items.forEach( (item) => {
        getDownloadURL(item).then((url) => {
          setImageList( (prev) => [
            ...prev, 
            url,
          ])
        })
      })
    }) 
  }, [])


  return (
    <div className="App">
      <input type="file" onChange={(e) => {setImageUpload(e.target.files[0])}}/>
      <button onClick={uploadImage}>Upload Image</button>
      <div>
        {imageList.map((url) => {
          return <img className='fit' src={url} alt="Hi there"/>
        })}
      </div>
    </div>
  );
}

export default App;

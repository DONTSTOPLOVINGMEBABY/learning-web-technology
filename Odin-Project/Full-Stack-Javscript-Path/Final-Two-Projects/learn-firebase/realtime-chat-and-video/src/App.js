import './App.css';
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, onValue} from "firebase/database" 
import { useRef } from 'react';
import { app } from './firebase';

function App() {

    
  const writeUserData = (userId, name, email, imageUrl) => {
    const db = getDatabase() ; 
    const reference = ref(db, 'users/' + userId) ; 

    set(reference, {
      username: name,
      email: email, 
      profile_picture : imageUrl, 
      last_thing: [
        name, 
        email,
        imageUrl
      ]
    })
  }

  const db = getDatabase() ; 
  const distanceRef = ref(db, 'users/' + 'henrymjacobs', '/last_thing') ; 
  
  onValue(distanceRef, (snapshot) => {
    const data = snapshot.val() ; 
    console.log(snapshot)
    console.log(data)
  })
  

  writeUserData("henrymjacobs", "Hank Jake", "henrymjaco@gmail.com", "www.google.com")
  

  return (
    
    <div className="App">
      <h1>Check console</h1>
    </div>
  );
}

export default App;

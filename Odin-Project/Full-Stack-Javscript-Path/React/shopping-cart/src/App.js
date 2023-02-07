import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import {background_images} from "./utils/wallpapers"
import Background from './components/background';


function App() {
  
  const [background, setBackground] = useState(background_images[0]) ; 
  const [counter, setCounter] = useState(0) ; 

  useEffect( () =>{
    const interval = setInterval( () =>{
      setCounter( (counter + 1) % background_images.length) ; 
    }, 5000) ;
    return () => clearInterval(interval) ; 
  }, [counter]) ; 

  useEffect( () => {
    setBackground(background_images[counter])
  }, [counter]) ; 
  
  
  
  return (
    <div id='HomePage'>
      <Background image={background}/> 
      <div className='store-welcome'>
        Vintage Video Games
      </div>
      <div className='Enter-store'>
        ENTER STORE
      </div>
    </div>
    )
}


export default App;

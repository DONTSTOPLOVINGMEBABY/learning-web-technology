import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import {background_images} from "./utils/wallpapers"
import Background from './components/background';
import WelcomeMessage from './components/welcome-message';
import EnterStore from './components/enter-store';

const top_colors = [
  "#FFFFFF", 
  "#E0151C", 
  "#F8E000", 
  "#96C640", 
]




function App() {
  
  const [background, setBackground] = useState(background_images[0]) ; 
  const [fontColor, setFontColor] = useState(top_colors[0]) ; 
  const [counter, setCounter] = useState(0) ; 

  useEffect( () =>{
    const interval = setInterval( () =>{
      setCounter( (counter + 1) % background_images.length) ; 
    }, 5000) ;
    return () => clearInterval(interval) ; 
  }, [counter]) ; 

  useEffect( () => {
    setBackground(background_images[counter]) ; 
    setFontColor(top_colors[counter]) ; 
  }, [counter]) ; 
  
  const click_button = () => {
    console.log("Hi there") ; 
  }
  
  
  return (
    <div id='HomePage'>
      <Background image={background}/> 
      <WelcomeMessage 
      color={fontColor}
      />
      <EnterStore 
      onClick={click_button}
      color={fontColor}/>
    </div>
    )
}


export default App;

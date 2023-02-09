import { useEffect, useState } from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom';
import {background_images} from "./utils/wallpapers"
import Background from './components/front-page-components/background';
import WelcomeMessage from './components/front-page-components/welcome-message';
import EnterStore from './components/front-page-components/enter-store';

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
  let navigate = useNavigate() ; 

  useEffect( () =>{
    const interval = setInterval( () =>{
      setCounter( (counter + 1) % background_images.length) ; 
    }, 4000) ;
    return () => clearInterval(interval) ; 
  }, [counter]) ; 

  useEffect( () => {
    setBackground(background_images[counter]) ; 
    setFontColor(top_colors[counter]) ; 
  }, [counter]) ; 
  
  return (
    <div id='HomePage'>
      <Background image={background}/> 
      <WelcomeMessage 
      color={fontColor}
      />
      <EnterStore 
      onClick={() => navigate("/shop-page")}
      color={fontColor}/>
    </div>
    )
}


export default App;

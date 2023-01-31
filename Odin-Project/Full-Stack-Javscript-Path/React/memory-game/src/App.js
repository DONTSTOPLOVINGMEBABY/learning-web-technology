import React, {useEffect, useState} from "react"
import './App.css';
import NavBar from './components/nav-bar';
import Game from "./components/the-game";

function App() {

  const [levelStatus, setLevelStatus] = useState({
    beginner: true, 
    intermediate: false, 
    advanced: false, 
    impossible: false
  }) 

  const [score, setScore] = useState({
    current_score: 0, 
    high_score: 0, 
  })


  return (
    <div className='main'>
      <NavBar levelStatus={levelStatus} setLevelStatus={setLevelStatus}/>
      <Game levelStatus={levelStatus} />
    </div> 
  ) ; 

}

export default App;

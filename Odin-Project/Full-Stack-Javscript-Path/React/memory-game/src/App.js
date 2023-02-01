import React, {useEffect, useState} from "react"
import './App.css';
import NavBar from './components/nav-bar';
import Game from "./components/the-game";
import CarPiece from "./components/car-piece";



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

  const [seenCars, setSeenCars] = useState([])


  return (
    <div className='main'>
      <NavBar 
      levelStatus={levelStatus} 
      setLevelStatus={setLevelStatus}
      score={score}/>
      <Game 
      levelStatus={levelStatus}
      current_score={score.current_score}
      high_score = {score.high_score}
      setScore={setScore}
      score = {score}
      seenCars={seenCars}
      setCars={setSeenCars}/>
    </div> 
  ) ; 

}

export default App;

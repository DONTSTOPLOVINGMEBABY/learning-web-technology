import React, {useState} from "react"
import './App.css';
import NavBar from './components/nav-bar';
import Game from "./components/the-game";
import Footer from "./components/footer";



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
      <Footer />
    </div> 
  ) ; 

}

export default App;

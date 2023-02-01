import React, {useState, useEffect} from "react";
import CarPiece from "./car-piece";
import "../styles.css/game.css"

import Bentley from "../assets/bentley.svg" ; 
import BMW from "../assets/bmw.svg" ; 
import Cadillac from "../assets/cadillac.svg" ; 
import Chevrolet from "../assets/chevrolet.svg" ; 
import Ferrari from "../assets/ferrari.svg" ; 
import Fiat from "../assets/fiat.svg" ; 
import Ford from "../assets/ford.svg" ; 
import GMC from "../assets/gmc.svg" ; 
import Honda from "../assets/honda.svg" ; 
import Lamborghini from "../assets/lamborghini.svg" ; 
import Lexus from "../assets/lexus.svg" ; 
import Mclaren from "../assets/mclaren.svg" ; 
import Mercedes from "../assets/mercedes.svg" ; 
import Porsche from "../assets/porsche.svg" ; 
import RollsRoyce from "../assets/rolls-royce.svg" ; 
import Subaru from "../assets/subaru.svg" ; 
import Tesla from "../assets/tesla.svg" ; 
import Toyota from "../assets/toyota.svg" ; 
import Volkswagen from "../assets/volkswagen.svg" ; 
import Volvo from "../assets/volvo.svg" ; 

const glob2 = {
    "Bentley" : Bentley, 
    "BMW" : BMW, 
    "Cadillac" : Cadillac, 
    "Chevrolet" : Chevrolet, 
    "Ferrari" : Ferrari, 
    "Fiat" : Fiat, 
    "Ford" : Ford, 
    "GMC" : GMC, 
    "Honda" : Honda, 
    "Lamborghini" : Lamborghini, 
    "Lexus" : Lexus, 
    "Mclaren" : Mclaren, 
    "Mercedes" : Mercedes, 
    "Porsche" : Porsche, 
    "RollsRoyce" : RollsRoyce, 
    "Subaru" : Subaru, 
    "Tesla" : Tesla, 
    "Toyota" : Toyota, 
    "Volkswagen" : Volkswagen, 
    "Volvo" : Volvo,
} 

function found (array, value) {
    for (let i = 0 ; i < array.length ; i++){
        if (array[i] == value){return true}
    }
    return false
}

const shuffleArray = array => {
    return [...array].sort(() => Math.random() - 0.5)
  }  


function Game (props) {
 
    const [object_keys, setObjectKeys] = useState([])
    

    Object.keys(glob2).forEach((key, index) => {
        object_keys.push(key)
    })  // Initialize all object keys

    const update_score = (e) => {
        if (found(props.seenCars, e.target.id)){
            if (props.current_score > props.high_score){
                props.setScore(prevState => {
                    return {high_score : prevState.current_score, current_score: 0}
                })
            }
            else {
                props.setScore(prevState =>{
                    return {...prevState, current_score: 0}
                })        
            }
            props.setCars(prevState => {
                return []
            })
        }
        else {
            if (props.current_score >= props.high_score){ 
                props.setScore(prevState =>{
                    return {current_score: prevState.current_score + 1, high_score : prevState.current_score + 1}
                })
            }
            else {
                props.setScore(prevState => {
                    return {current_score : prevState.current_score + 1 , high_score : prevState.high_score}
                })
            }
            props.setCars(prevState => {
                return [...prevState, e.target.id] 
            })
        }
    }


    return <div className="game">
        {object_keys.map( (key) => {
            return <CarPiece 
            handle_click={update_score}
            picture={glob2[key]}
            brandName={key}
            key={key}
            />
        })}
    </div>
}

export default Game
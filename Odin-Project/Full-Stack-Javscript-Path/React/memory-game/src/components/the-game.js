import React, {useState, useEffect} from "react";
import CarPiece from "./car-piece";
import masterglob from "../utils/pictures"; 
import { shuffleArray, found, return_x_shuffled_elements } from "../utils/array_utils";
const glob1 = masterglob[0] // list of names of car brands
const glob2 = masterglob[1] // Object with name and photo link pairs


function Game(props) {

    // Only feed in as many from glob1 as you need for the difficult level

    const [object_keys, setObjectKeys] = useState([]) 
 
    useEffect( () => {
        let temp_array ; 
        if (props.levelStatus.beginner){
            temp_array=return_x_shuffled_elements(glob1, 5)} 
        else if (props.levelStatus.intermediate){
            temp_array=return_x_shuffled_elements(glob1, 10)}
        else if (props.levelStatus.advanced){
            temp_array=return_x_shuffled_elements(glob1, 15) 
        }
        else {temp_array=return_x_shuffled_elements(glob1, 19)}
        setObjectKeys( (prevState) =>[
            ...temp_array, 
        ])
    }, [props.levelStatus])


    const mix = (e) => {
        setObjectKeys(shuffleArray(object_keys)) ; 
        update_score(e) ; 
    } 

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

    return (
        <div className="game">
            {object_keys.map( (key) => {
                console.log(key)
                return <div>
                    <CarPiece 
                    handle_click={mix}
                    picture={glob2[key]}
                    brandName={key}
                    key={key}
                    />
                </div>
            })}
        </div>
    )
}

export default Game
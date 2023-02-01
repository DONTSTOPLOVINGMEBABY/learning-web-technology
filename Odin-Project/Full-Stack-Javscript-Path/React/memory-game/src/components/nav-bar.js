import React, { useEffect, setState } from "react";
import "../styles.css/navbar.css"

function NavBar (props) {

    const colors = {
        beginner: '#3FE760', 
        intermediate: '#2EAFE1', 
        advanced: '#FF1616', 
        impossible: '#FB0ED7'
    }

    const adjustBeginner = (e) => {
        let true_element ; 
        for (let obj in props.levelStatus){ 
            if (props.levelStatus[obj]) {true_element = obj} ; 
        }
        if (e.target.id == true_element){return}
        props.setLevelStatus({
            ...props.levelStatus, 
            [true_element]: false, 
            [e.target.id] : true, 
        })
        document.getElementById(`${true_element}`).style.color = 'black' ; 
        document.getElementById(e.target.id).style.color = colors[e.target.id] ; 
    }

    return (
        <div id="NavBar">
            <div className="title">
                The Car Brand Memory Game 
            </div>
            <div className="score">
                <div id="current-score">Current Score: {props.score.current_score}</div>
                <div id="high-score">High Score: {props.score.high_score}</div>
            </div>
            <ul className="choose-level">
                <div>
                    <li onClick={adjustBeginner} id="beginner" className="level activeBeginner">Beginner</li>
                    <li onClick={adjustBeginner} id="intermediate" className="level">Intermediate</li>
                </div>
                <div>
                    <li onClick={adjustBeginner} id="advanced" className="level">Advanced</li>
                    <li onClick={adjustBeginner} id="impossible" className="level">Impossible</li>
                </div>
            </ul>
        </div> 
    ) ; 
}


export default NavBar
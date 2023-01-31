import React from "react";
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

const glob = [Bentley, BMW, Cadillac, Chevrolet, Ferrari, Fiat, Ford, GMC, Honda, Lamborghini, Lexus, Mclaren, Mercedes, Porsche, RollsRoyce, Subaru, Tesla, Toyota, Volkswagen, Volvo]

function Game (props) {

    
    
    return <div className="game">
        <div>Hankus</div>
        <CarPiece />
    </div>

}

export default Game
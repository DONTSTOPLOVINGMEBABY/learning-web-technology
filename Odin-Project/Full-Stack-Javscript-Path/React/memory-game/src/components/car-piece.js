import React from "react";
import "../styles.css/car-piece.css" ; 

function CarPiece (props) {

    return (
        <div className="car-piece" id={props.brandName} onClick={props.handle_click}>
            <img id={props.brandName} className="size-picture" alt={props.brandName} src={props.picture} />
            <div className="car-title">{props.brandName}</div>
        </div>
    )
}


export default CarPiece
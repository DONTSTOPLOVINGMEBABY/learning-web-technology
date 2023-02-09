import React from "react";

function WelcomeMessage(props){
    return (
        <div className="store-welcome" style={{color: props.color}}>
            Classic Video Game Collection
        </div>
    )
}

export default WelcomeMessage
import React from "react";
import "../../style/example.css"

function Background (props) {
    return <div id="background-image" style={{backgroundImage: `url(${props.image})`}}></div>
}

export default Background
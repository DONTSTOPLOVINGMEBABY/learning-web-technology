import React from "react";

function EnterStore (props) {
    return (<div onClick={props.onClick} className="Enter-store" style={{color: props.color}}>
    Enter Store
    </div> )
}

export default EnterStore
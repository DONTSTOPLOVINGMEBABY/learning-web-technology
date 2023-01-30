import React from "react";

function GeneralInfo (props){ 

    return (
        <div>
            <div className="sub-container">
                    <div className="cell">
                        <label htmlFor="name">Name </label>
                        <input 
                        type="text"
                        id="name"
                        onChange = {props.makeChange} 
                        value={props.name} 
                        />
                        <label htmlFor="email">Email</label>
                        <input 
                        type="email" 
                        id="email"
                        onChange = {props.makeChange}
                        value={props.email}
                        />
                    </div>
                    <div className="cell">
                        <label htmlFor="phone">Phone Number</label>
                        <input 
                        type="text"
                        id="phone"
                        onChange={props.makeChange}
                        value= {props.phone}
                        />
                        <label htmlFor="birth_day">Birth Day</label>
                        <input 
                        type="date"
                        id="birth_day"
                        onChange={props.makeChange}
                        value= {props.birth_day}
                        />
                    </div>
                </div>
        </div>
    )
}

export default GeneralInfo
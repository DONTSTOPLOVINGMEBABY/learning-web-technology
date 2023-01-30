import React from "react";

function PracticalExperience(props){
    return (
        <div className="sub-container">
                <div className="cell">
                    <label htmlFor="company">Company Name</label>
                    <input 
                    type="text"
                    id="company"
                    onChange = {props.makeChange}
                    value = {props.company}
                    />
                    <label htmlFor="position">Position Title</label>
                    <input 
                    type="text"
                    id="position"
                    onChange = {props.makeChange}
                    value = {props.position}
                    />
                </div>
                <div className="cell">
                    <label htmlFor="start_date">Start Date</label>
                    <input 
                    type="date"
                    id="start_date"
                    onChange = {props.makeChange}
                    value = {props.start_date}
                    />
                    <label htmlFor="end_date">Position End Date</label>
                    <input 
                    type="date"
                    id="end_date"
                    onChange = {props.makeChange}
                    value = {props.end_date}
                    />
                </div>
            </div>
    )
}

export default PracticalExperience
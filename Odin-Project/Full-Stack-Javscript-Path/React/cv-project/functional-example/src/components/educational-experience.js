import React from "react" ; 

function EducationalExperience(props) {
    return (
        <div className="sub-container">
            <div className="cell">
                <label htmlFor="school">School Name</label>
                <input 
                onChange = {props.makeChange}
                value = {props.school}
                type="text"
                id="school"
                />
                <label htmlFor="degree">Degree Received</label>
                <input 
                onChange = {props.makeChange}
                value = {props.degree}
                type="text"
                id="degree"
                />
            </div>
            <div className="cell">
                <label htmlFor="graduation_year">Year Graduated</label>
                <input 
                onChange = {props.makeChange}
                value = {props.grad_year}
                type="number"
                id="graduation_year"
                />
                <label htmlFor="minors">Specializations/Minors</label>
                <input 
                onChange = {props.makeChange}
                value = {props.minors}
                type="text"
                id="minors"
                />
            </div>
        </div>
    )
}

export default EducationalExperience
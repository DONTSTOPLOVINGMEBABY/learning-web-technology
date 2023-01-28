import React, {Component} from "react" 
import "../styles/Cv-Practical-Experience.css"

class CvPracticalExperience extends Component {
    constructor(props){
        super(props) ; 
    }

    render(){

        const {
            company_value, 
            position_value, 
            start_date_value, 
            end_date_value} = this.props ; 
        return(
            <div className="gen-info">
                <div id="cv-title-headers">Practical Experience</div>
                <div id="gen-info-info">
                    <div id="one">
                        <div>Company <span id="item">{company_value}</span></div>
                        <div>Position <span id="item">{position_value}</span></div>
                    </div>
                    <div id="two">
                        <div>Start Date <span id="item">{start_date_value}</span></div>
                        <div>End Date <span id="item">{end_date_value}</span></div>
                    </div>
                </div>
            </div>
        )
    }
}


export default CvPracticalExperience
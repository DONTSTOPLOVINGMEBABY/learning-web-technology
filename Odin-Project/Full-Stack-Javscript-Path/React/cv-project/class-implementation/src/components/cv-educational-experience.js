import React, {Component} from "react" 
import "../styles/Cv-Educational-Exp.css"

class CvEducationalExperience extends Component {
    constructor(props){
        super(props) ; 
    }


    render(){

        const {
            school_value, 
            degree_value, 
            graduation_year_value, 
            minors_value} = this.props ; 

        return(
            <div className="gen-info">
                <div id="cv-title-headers">Educational Background</div>
                <div id="gen-info-info">
                    <div id="one">
                        <div>School <span id="item">{school_value}</span></div>
                        <div>Degree <span id="item">{degree_value}</span></div>
                    </div>
                    <div id="two">
                        <div>Graduated <span id="item">{graduation_year_value}</span></div>
                        <div>Minors: <span id="item">{minors_value}</span></div>
                    </div>
                </div>
            </div>
        )
    }
}


export default CvEducationalExperience
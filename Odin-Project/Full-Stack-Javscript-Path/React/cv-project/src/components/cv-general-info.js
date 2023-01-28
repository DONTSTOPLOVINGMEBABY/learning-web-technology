import React, {Component} from "react" 
import "../styles/Cv-General-Info.css"

class CvGeneralInfo extends Component {
    constructor(props){
        super(props) ; 
    }

    render(){
        const {
            name_value,
            email_value, 
            phone_value, 
            birth_day_value} = this.props; 

        return(
            <div className="gen-info">
                <div id="cv-title-headers">General Info</div>
                <div id="gen-info-info">
                    <div id="one">
                        <div>Name <span id="item">{name_value}</span></div>
                        <div>Email <span id="item">{email_value}</span></div>
                    </div>
                    <div id="two">
                        <div>Phone <span id="item">{phone_value}</span></div>
                        <div>Birth Day <span id="item">{birth_day_value}</span></div>
                    </div>
                </div>
            </div>
        )
    }
}


export default CvGeneralInfo
import React ,{Component} from "react" ; 
import "../styles/Practical-Exp.css"


class PracticalExperience extends Component {
    constructor(props){
        super(props) ; 
    }


    render () {

        const {
            pass, 
            company_value, 
            position_value, 
            start_date_value, 
            end_date_value} = this.props ; 

        return (
            <div className="sub-container">
                <div className="cell">
                    <label htmlFor="company">Company Name</label>
                    <input 
                    type="text"
                    id="company"
                    onChange = {pass}
                    value = {company_value}
                    />
                    <label htmlFor="position">Position Title</label>
                    <input 
                    type="text"
                    id="position"
                    onChange = {pass}
                    value = {position_value}
                    />
                </div>
                <div className="cell">
                    <label htmlFor="start_date">Start Date</label>
                    <input 
                    type="date"
                    id="start_date"
                    onChange = {pass}
                    value = {start_date_value}
                    />
                    <label htmlFor="end_date">Position End Date</label>
                    <input 
                    type="date"
                    id="end_date"
                    onChange = {pass}
                    value = {end_date_value}
                    />
                </div>
            </div>
        )
    }
}


export default PracticalExperience
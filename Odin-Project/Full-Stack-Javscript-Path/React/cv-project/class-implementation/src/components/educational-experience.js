import React ,{Component} from "react" ; 
import "../styles/Educational-Exp.css"


class EducationalExperience extends Component {
    constructor(props){
        super(props) ; 
    }


    render () {

        const {
            pass, 
            school_value, 
            degree_value, 
            graduation_year_value, 
            minors_value} = this.props ; 

        return (
            <div className="sub-container">
                <div className="cell">
                    <label htmlFor="school">School Name</label>
                    <input 
                    onChange = {pass}
                    value = {school_value}
                    type="text"
                    id="school"
                    />
                    <label htmlFor="degree">Degree Received</label>
                    <input 
                    onChange = {pass}
                    value = {degree_value}
                    type="text"
                    id="degree"
                    />
                </div>
                <div className="cell">
                    <label htmlFor="graduation_year">Year Graduated</label>
                    <input 
                    onChange = {pass}
                    value = {graduation_year_value}
                    type="number"
                    id="graduation_year"
                    />
                    <label htmlFor="minors">Specializations/Minors</label>
                    <input 
                    onChange = {pass}
                    value = {minors_value}
                    type="text"
                    id="minors"
                    />
                </div>
            </div>
        )
    }
}


export default EducationalExperience  
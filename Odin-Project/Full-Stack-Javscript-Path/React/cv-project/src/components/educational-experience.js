import React ,{Component} from "react" ; 
import "../styles/Educational-Exp.css"


class Educational_Experience extends Component {
    constructor(props){
        super(props) ; 
    }


    render () {

        return (
            <div className="sub-container">
                <div>
                    <label htmlFor="school-name">School Name</label>
                    <input 
                    type="text"
                    id="school-name"
                    //onChange = {something}
                    //value = {someObject's data}
                    />
                    <label htmlFor="diploma-title">Degree Received</label>
                    <input 
                    type="text"
                    id="diploma-title"
                    //onChange = {something}
                    //value = {someObject's data}
                    />
                </div>
                <div>
                    <label htmlFor="graduation-year">Year Graduated</label>
                    <input 
                    type="text"
                    id="graduation-year"
                    //onChange = {something}
                    //value = {someObject's data}
                    />
                    <label htmlFor="minors">Specializations/Minors</label>
                    <input 
                    type="text"
                    id="minors"
                    //onChange = {something}
                    //value = {someObject's data}
                    />
                </div>
            </div>
        )
    }
}


export default Educational_Experience  
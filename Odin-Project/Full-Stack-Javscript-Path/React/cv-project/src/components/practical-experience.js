import React ,{Component} from "react" ; 
import "../styles/Practical-Exp.css"


class Practical_Experience extends Component {
    constructor(props){
        super(props) ; 
    }


    render () {

        return (
            <div className="sub-container">
                <div>
                    <label htmlFor="company-name">Company Name</label>
                    <input 
                    type="text"
                    id="company-name"
                    //onChange = {something}
                    //value = {someObject's data}
                    />
                    <label htmlFor="Position Title">Position Title</label>
                    <input 
                    type="text"
                    id="Position Title"
                    //onChange = {something}
                    //value = {someObject's data}
                    />
                </div>
                <div>
                    <label htmlFor="position-start-date">Start Date</label>
                    <input 
                    type="text"
                    id="position-start-date"
                    //onChange = {something}
                    //value = {someObject's data}
                    />
                    <label htmlFor="position-end-date">Position End Date</label>
                    <input 
                    type="text"
                    id="position-end-date"
                    //onChange = {something}
                    //value = {someObject's data}
                    />
                </div>
            </div>
        )
    }
}


export default Practical_Experience
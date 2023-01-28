import React ,{Component} from "react" ; 
import "../styles/General-Info.css" ; 


class GeneralInfo extends Component {
    constructor(props){
        super(props) ; 
    }


    render () {

        const {
            pass, 
            name_value,
            email_value, 
            phone_value, 
            birth_day_value} = this.props; 

        return (
            <div className="sub-container">
                <div className="cell">
                    <label htmlFor="name">Name </label>
                    <input 
                    type="text"
                    id="name"
                    onChange = {pass} 
                    value={name_value} 
                    />
                    <label htmlFor="email">Email</label>
                    <input 
                    type="email" 
                    id="email"
                    onChange = {pass}
                    value={email_value}
                    />
                </div>
                <div className="cell">
                    <label htmlFor="phone">Phone Number</label>
                    <input 
                    type="text"
                    id="phone"
                    onChange={pass}
                    value= {phone_value}
                    />
                    <label htmlFor="birth_day">Birth Day</label>
                    <input 
                    type="date"
                    id="birth_day"
                    onChange={pass}
                    value= {birth_day_value}
                    />
                </div>
            </div>
        ) ; 
    }
}


export default GeneralInfo  
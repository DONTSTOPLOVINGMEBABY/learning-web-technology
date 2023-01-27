import React ,{Component} from "react" ; 
import "../styles/General-Info.css" ; 


class General_Info extends Component {
    constructor(props){
        super(props) ; 
    }


    render () {

        const {try_function} = this.props; 

        return (
            <div className="sub-container">
                <div>
                    <label htmlFor="name">Test </label>
                    <input 
                    type="text"
                    id="name"
                    onChange = {try_function} 
                    //value={update_from_object} 
                    />
                    <label htmlFor="email">Email</label>
                    <input 
                    type="email" 
                    id="email"
                    //onChange = {samefunction?}
                    //value={update_from_object}
                    />
                </div>
                <div>
                    <label htmlFor="phone-number">Phone Number</label>
                    <input 
                    type="text"
                    id="phone-number"
                    // onChange={try_function}
                    //value= {update_from_object}
                    />
                    <label htmlFor="Birth-Day">Birth Day</label>
                    <input 
                    type="date"
                    id="phone-number"
                    // onChange={try_function}
                    //value= {update_from_object}
                    />
                </div>
            </div>
        ) ; 
    }
}


export default General_Info  
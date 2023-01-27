import React, {Component} from "react" ; 
import "./styles/App.css" ; 
import General_Info from "./components/general-info";
import Educational_Experience from "./components/educational-experience";
import Practical_Experience from "./components/practical-experience";

class App extends Component {

  constructor(){
    super() ; 

    this.state = {
    }

  }

  test_me_out = (e) => {
    console.log(e.target.value) ; 
  }

  onSubmitCV = (e) => {
    e.preventDefault() ; 
  }


  render () {

    return (
      <div id="not-sure">
        <form onSubmit={this.onSubmitCV}>
          <fieldset>
            <legend>Build CV</legend>
            <General_Info try_function={this.test_me_out}/>
            <Educational_Experience />
            <Practical_Experience />
            <button type="submit">Create CV</button>
          </fieldset>
        </form>  
        
        <div className="resume-side">
          Components used to display information go here
        </div>
      </div>
    ) ; 
  }
}






export default App;

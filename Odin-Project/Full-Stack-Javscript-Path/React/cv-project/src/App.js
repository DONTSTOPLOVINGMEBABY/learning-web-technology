import React, {Component} from "react" ; 
import "./styles/App.css" ; 
import GeneralInfo from "./components/general-info";
import EducationalExperience from "./components/educational-experience";
import PracticalExperience from "./components/practical-experience";
import CvGeneralInfo from "./components/cv-general-info";
import CvEducationalExperience from "./components/cv-educational-experience";
import CvPracticalExperience from "./components/cv-practical-experience";

class App extends Component {

  constructor(){
    super() ; 

    this.state = {
      form_items : {
        name: {text: ''}, 
        email: {text: ''}, 
        phone: {text: ''}, 
        birth_day: {text: ''}, 
        school: {text: ''},  
        degree: {text: ''}, 
        graduation_year: {text: ''}, 
        minors: {text: ''}, 
        company: {text: ''}, 
        position: {text: ''}, 
        start_date: {text: ''}, 
        end_date: {text: ''}, 
      }, 
      cv_items: {
        name: {text: ''}, 
        email: {text: ''}, 
        phone: {text: ''}, 
        birth_day: {text: ''}, 
        school: {text: ''}, 
        degree: {text: ''}, 
        graduation_year: {text: ''}, 
        minors: {text: ''}, 
        company: {text: ''}, 
        position: {text: ''}, 
        start_date: {text: ''}, 
        end_date: {text: ''}, 
      },  
    }
  }

  onEditForm = () => {
    let copy_cv_items = this.state.cv_items ; 
    this.setState({
      form_items: {
        ...copy_cv_items
      }
    })
  }


  onSubmitCV = () => {
    let copy_form_items = this.state.form_items ; 
    this.setState({
      cv_items: {
        ...copy_form_items
      }
    })  
    let new_form_items = {}
    for (let thing in this.state.form_items){
      new_form_items[thing] = {text: ''}
    }
    console.log(new_form_items)
    this.setState({
      form_items: {
        ...new_form_items
      }
    })
  }

  handle_change = (e) => {
    let id = e.target.id, string ; 
    let copy_form_items = this.state.form_items ; 
    string = e.target.value ; 
    this.setState({
      form_items: {
        ...copy_form_items, 
        [id] : {
          text: string, 
        }
      }
    })
    console.log(this.state.form_items[id])
  }

  render () {

    return (
      <div id="not-sure">
        <div id="first-half">
          <form onSubmit={this.onSubmitCV}>
              <legend>Build CV</legend>
              <GeneralInfo 
              pass={this.handle_change}
              name_value={this.state.form_items.name.text} 
              email_value={this.state.form_items.email.text} 
              phone_value={this.state.form_items.phone.text} 
              birth_day_value={this.state.form_items.birth_day.text}/>
              <EducationalExperience 
              pass={this.handle_change}
              school_value={this.state.form_items.school.text}
              degree_value={this.state.form_items.degree.text}
              graduation_year_value={this.state.form_items.graduation_year.text}
              minors_value={this.state.form_items.minors.text}/>
              <PracticalExperience 
              pass={this.handle_change}
              company_value={this.state.form_items.company.text}
              position_value={this.state.form_items.position.text}
              start_date_value={this.state.form_items.start_date.text}
              end_date_value={this.state.form_items.end_date.text}/>
          </form>  

          <div id="first-half-two-0">
              <button onClick={this.onSubmitCV}>Submit</button>
              <button onClick={this.onEditForm}>Edit</button>
          </div>
        </div>
        <div className="resume-side">
          <CvGeneralInfo
          name_value={this.state.cv_items.name.text}
          email_value={this.state.cv_items.email.text}
          phone_value={this.state.cv_items.phone.text}
          birth_day_value={this.state.cv_items.birth_day.text}/>
          <CvEducationalExperience
          school_value={this.state.cv_items.school.text}
          degree_value={this.state.cv_items.degree.text}
          graduation_year_value={this.state.cv_items.graduation_year.text}
          minors_value={this.state.cv_items.minors.text}/> 
          <CvPracticalExperience
          company_value={this.state.cv_items.company.text}
          position_value={this.state.cv_items.position.text}
          start_date_value={this.state.cv_items.start_date.text}
          end_date_value={this.state.cv_items.end_date.text}/>
        </div>
      </div>
    ) ; 
  }
}

/* 

Break state up into two objects 
first one being what's being written on the form 
the second one what's written on the resume
When someone goes to make an edit, then you can 
use information from the form object in state to
fill the CV object in state and vice versa

*/ 


export default App;

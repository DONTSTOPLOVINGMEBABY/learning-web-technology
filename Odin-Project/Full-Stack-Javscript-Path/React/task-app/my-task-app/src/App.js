import React, { Component, useRef } from 'react'
import Overview from './components/Overview'


class App extends Component {3
  constructor() {
    super() ; 
    
    this.state = {
      tasks_array : [], 
      input_string : 'sad' 
    } ; 
    
    this.button_function = this.button_function.bind(this) ;
    this.handle_text_change = this.handle_text_change.bind(this) ;  
  }

  button_function (event) {
    event.preventDefault() ; 
    this.setState({
      tasks_array: [...this.state.tasks_array, this.state.input_string], 
      input_string: '',  
    }) 
  }

  handle_text_change (event) {
    this.setState({
      input_string: event.target.value,  
    })
  }


  render() {
    return (
      <div>
        <form>
          <input type="text" 
          placeholder='add something to list'
          onChange={this.handle_text_change} 
          value={this.state.input_string}
          />
          <button onClick={this.button_function}>Click to Add</button>
          <Overview hello={this.state.tasks_array}></Overview>
        </form>
      </div>
    ) ; 
  }

}



export default App;

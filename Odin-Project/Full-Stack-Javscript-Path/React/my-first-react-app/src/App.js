// import React, { Component } from 'react'

// function App() {
//   return <div className="App">Hello World!</div> ; 
// }

// const App = () => {
//   return <div className = "App">Hello World!</div>
// }


// const App = () => <div className="App">
//   <h1>Hello world!</h1>
//   <h3>Hello friend</h3>
//   </div> ; 
 

// class App extends Component {
//     constructor() {
//         super()
//     }

//     {/* Javascript functions can be written here */}

//     render() {
//         return (
//             <div className="App">
//             Hello World!
//             </div>
//         )
//     }
// }

import React, { Component } from "react" ; 
// import { Header } from "./components/header";
// import { Home } from "./components/home";
import MyComponent from "./components/myComponent";

// class App extends React.Component {
//   render() {
//     return (
//       <div className="container">
//         <div className="row">
//           <div className="col-xs-10 col-xs-offset-1">
//             <Header/>
//           </div>
//         </div>
//         <div className="row">
//           <div className="col-xs-10 col-xs-offset-1">
//             <Header/>
//           </div>
//         </div>
//       </div>
//     )
//   }
// }

// class App extends Component {
//   constructor(props) {
//     super(props);

//     // this.onClickBtn = this.onClickBtn.bind(this);
//   }

//   onClickBtn() {
//     console.log('Button has been clicked!');
//   }

//   render() {
//     const { title, onButtonClicked } = this.props;
//     return (
//       <div>
//         <h1>{title}</h1>
//         <MyComponent title="React" onButtonClicked={this.onClickBtn} />
//       </div>
//     );
//   }
// }

// export default App;



// class App extends Component {
//   constructor() {
//     super() ; 

//     this.state = {
//       count: 0, 
//     } ; 

//     this.countUp = this.countUp.bind(this) ; 

//   }

//   countUp() {
//     this.setState({
//       count: this.state.count + 1, 
//     }) ; 
//   }

//   render() {
//     return (
//       <div>
//         <button onClick={this.countUp}>Click Me!</button>
//         <p>{this.state.count}</p>
//       </div>
//     ) ; 
//   }
// }


function App() {
  return (
    <div>
      <MyComponent title="Hello world"/> 
    </div>
  )
}





export default App;
import React, { Component } from 'react';

// class MyComponent extends Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <div>
//         <h1>{this.props.title}</h1>
//         <button onClick={this.props.onButtonClicked}>Click Me!</button>
//       </div>
//     );
//   }
// }


function MyComponent( {title} ) {
  return <div>{title}</div> ; 
}


export default MyComponent;
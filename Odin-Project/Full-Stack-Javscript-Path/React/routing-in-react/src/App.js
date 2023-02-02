import React from "react";

function App() {

  function goToProfile() {
  window.open("http://localhost:3000/profile", "_self") } 


  return (
    <div>
      <h1>Hello from App</h1>
      <button onClick={goToProfile}>Go to Profile</button>
    </div>
  );
}

export default App;

import React, { useState } from 'react'
import Chart from 'chart.js/auto';
const alpha_vantage = require("alphavantage")({key: "GH5RZKE5CLNDYG61"}) 
const { parse } = require("csv-parse")

function App() {

  const [time, setTime] = useState([]) 
  const [data, setData] = useState([]) 
  const [stock, setStock] = useState([]) 


  // async function grab_stock (stock) {
  //   try {
  //     const response = await alpha_vantage.data.daily(stock) ; 
  //     const data = await response.json() ; 
  //     console.log(data)
  //   }
  //   catch (error) {
  //     console.log("talking wesly") ; 
  //   }
  // }

  const make_change = (e) => {
    setStock(e.target.value) 
    if (e.target.value == ""){return}
    alpha_vantage.data.intraday(e.target.value).then((data) => {
      console.log(data) ;
    })
  }

  // alpha.data.intraday(`msft`).then((data) => {
  //   console.log(data);
  // });
  



  // alpha_vantage.data.intraday(`msft`).then((data) => {
  //   const setData
  //   for(let i in data_table){setT(data_table[i])} ; 
  // });

  // Make input + submit button
  // Take a name of a stock
  // Grab the data 
  // make a graph 


  return (
    <h1>
        <input 
        type="text" 
        id="stock-input" 
        placeholder='stock' 
        onChange={make_change}
        value={stock}/>
        <button onClick={make_change}>Submit</button>
    </h1>
  )
}
export default App;

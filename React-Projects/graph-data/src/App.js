import React, {useEffect, useState} from "react";
import { Line } from "react-chartjs-2";
const alpha_vantage = require("alphavantage")({key: "GH5RZKE5CLNDYG61"}) 

function App() {

    const [formInput, setFormInput] = useState("") ; 
    const [submitClick, setSubmitClick] = useState(0) ; 
    const [xVals, setXVals] = useState([]) ;
    const [yVals, setYVals] = useState([]) ; 
    const [becomeTrue, setBecomeTrue] = useState(false)

    useEffect( () => {
        let x = []
        let y = [] ;
        if (formInput != ""){
            alpha_vantage.data.daily(formInput).then((data) => {
                for (let object in data["Time Series (Daily)"]){
                    x = [...x, object]
                    for (let kk in data["Time Series (Daily)"][object]){
                        y = [...y, data["Time Series (Daily)"][object][kk]]
                    }
                }
                setXVals([...xVals]) ; 
                setYVals([...yVals]) ; 
                setBecomeTrue(true) ; 
        })}
    }, [submitClick])


    const make_change = (e) => {
        let string = e.target.value.replace(/\s/g, '') ; 
        setFormInput(string) ;
    }

    const submit_stock = (e) => {
        if(formInput == ""){return}
        setSubmitClick(submitClick + 1) ; 
    }

    return (
        <div>
            <input 
            type="text" 
            id="stock-input" 
            placeholder='stock' 
            onChange={make_change}
            value={formInput}/>
            <button onClick={submit_stock}>Submit</button>
            { becomeTrue ? null : <Line
            data={{
            // x-axis label values
            labels: yVals,
            datasets: [
                {
              label: "# of Calories Lost",
              // y-axis data plotting values
              data: xVals,
              fill: false,
              borderWidth:4,
              backgroundColor: "rgb(255, 99, 132)",
              borderColor:'green',
              responsive:true
            },
          ],
        }}
      />} 
        </div>
      )
}
export default App;

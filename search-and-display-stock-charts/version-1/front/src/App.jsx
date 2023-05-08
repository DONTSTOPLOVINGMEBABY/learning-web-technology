import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Papa from 'papaparse'
import { LineChart, Line, CartesianGrid, YAxis, XAxis } from 'recharts'


function App() {
  const [count, setCount] = useState(0)
  const [chartData, setChartData] = useState()
  const stockInput = useRef()


  const update = () => {
    setCount(count + 1)
  }

  const try_this = async () => {
    const data = await fetch("http://localhost:3001/download") ; 
    const data_json = await data.json()   
    console.log(data_json)
    setChartData(data_json)
    console.log(data_json)
  }

  const submitStock = async (e) => {
    e.preventDefault()
    console.log(stockInput.current.value)
    let stock = await fetch("http://localhost:3001/form-guy", {
      method : 'POST', 
      body : JSON.stringify(stockInput.current.value)
    })
    if (!stock.ok) {console.log(stock) ; return }
    stock = await stock.json()
    console.log("helllo")
    console.log(stock)

  }

  useEffect( () => {
    try_this()
  }, [])

  return (
    <>
      {chartData ? <> 
      <h1>{chartData["name"]}</h1>
      <LineChart width={1200} height={400} data={chartData["data"]}>
        <Line type="monotone" dataKey="price" stroke="#0e4c4c" />
        <CartesianGrid stroke='#ccc' strokeDasharray="5 5"/>
        <XAxis dataKey="date"/> 
        <YAxis dataKey="price" /> 
      </LineChart> </> : null }
      <form onSubmit={submitStock}>
        <input placeholder="Stock Symbol" name='stock' ref={stockInput} id='stock-input'/>
      </form> 
    </>
  )
}

export default App
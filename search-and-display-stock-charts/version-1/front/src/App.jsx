import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Papa from 'papaparse'
import { LineChart, Line, CartesianGrid, YAxis, XAxis, ReferenceLine } from 'recharts'


function App() {
  const [count, setCount] = useState(0)
  const [chartData, setChartData] = useState()
  const [firstPrice, setFirstPrice] = useState() 
  const [maxPrice, setMaxPrice] = useState()
  const [minPrice, setMinPrice] = useState()
  const stockInput = useRef()


  const update = () => {
    setCount(count + 1)
  }

  const try_this = async () => {
    const data = await fetch("http://localhost:3001/download") ; 
    const data_json = await data.json()   
    setChartData(data_json)
    setFirstPrice(data_json["first_item"]["price"])
    console.log("One", data_json)
  }

  const submitStock = async (e) => {
    e.preventDefault()
    console.log(stockInput.current.value)
    let stock = await fetch(`http://localhost:3001/form-guy/${stockInput.current.value}`, {
      method : 'POST', 
      body : JSON.stringify(stockInput.current.value)
    })
    if (!stock.ok) {console.log(stock) ; return }
    stock = await stock.json()
    console.log("helllo")
    setChartData(stock)
    setFirstPrice(stock["first_item"]["price"])
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
        <YAxis dataKey="price" domain={['dataMin', 'dataMax']}/> 
        <ReferenceLine y={firstPrice} stroke='black'/> 
      </LineChart> </> : null }
      <form onSubmit={submitStock}>
        <input placeholder="Stock Symbol" name='stock' ref={stockInput} id='stock-input'/>
      </form> 
    </>
  )
}

export default App
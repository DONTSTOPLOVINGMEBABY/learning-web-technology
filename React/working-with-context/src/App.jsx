import './App.css'
import { useFlagContext } from './FlagContext'
 
function App() {

  let config = useFlagContext()
  console.log(config)
  
  return (
    <>
    hi
      { 
        Object.keys(config).map( (key, index) => {
          return <p>{key} : {config[key]}</p>
        })
      }
    </>
  )
}

export default App

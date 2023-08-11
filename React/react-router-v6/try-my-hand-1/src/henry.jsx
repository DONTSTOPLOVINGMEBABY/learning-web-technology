import henry from './public/henry.jpeg'
import { Link } from 'react-router-dom'

function Henry () {
    return ( 
        <>
            <img src={henry} alt='should-be-me' height='1000'/>
            <br/>
            <Link to='/'>Home</Link> 
        </>
    ) 
}

export default Henry
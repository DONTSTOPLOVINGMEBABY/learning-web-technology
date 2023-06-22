import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Signup from './Signup'
import SignIn from './SignIn'

function Router () {

    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/signup' element={<Signup />}/>
                <Route exact path='/signin' element={< SignIn />}/>
            </Routes>
        </BrowserRouter>
    )


}


export default Router


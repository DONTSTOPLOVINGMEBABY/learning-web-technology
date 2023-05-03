import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"

function Router () {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/admin/home" element={<HomePage/>}/>
                <Route exact path="/admin/login" element={<LoginPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router
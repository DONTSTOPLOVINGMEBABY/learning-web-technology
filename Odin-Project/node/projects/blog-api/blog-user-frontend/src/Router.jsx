import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";

function Router () {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/blog" element={<HomePage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router



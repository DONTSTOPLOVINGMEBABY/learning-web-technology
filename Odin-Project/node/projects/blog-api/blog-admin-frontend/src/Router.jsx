import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import ArticlePage from "./pages/ArticlePage"

function Router () {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/admin/home" element={<HomePage/>}/>
                <Route exact path="/admin/login" element={<LoginPage/>}/>
                <Route exact path="/admin/articles/:articleId" element={<ArticlePage/>}/>
                <Route path="*" element={<Navigate to="/admin/home" replace />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router
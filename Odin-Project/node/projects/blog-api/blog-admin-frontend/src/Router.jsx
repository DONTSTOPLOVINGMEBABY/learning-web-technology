import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import ArticlePage from "./pages/ArticlePage"
import CreateArticle from "./pages/CreateArticle"

function Router () {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/admin/home" element={<HomePage/>}/>
                <Route exact path="/admin/login" element={<LoginPage/>}/>
                <Route exact path="/admin/articles/:articleId" element={<ArticlePage/>}/>
                <Route exact path="/admin/create-article" element={<CreateArticle/>}/>
                <Route path="*" element={<Navigate to="/admin/home" replace />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router
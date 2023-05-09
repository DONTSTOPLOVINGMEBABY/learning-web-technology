import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ArticlePage from "./pages/ArticlePage";

function Router () {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/blog" element={<HomePage/>}/>
                <Route exact path="/articles/:articleId" element={<ArticlePage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router



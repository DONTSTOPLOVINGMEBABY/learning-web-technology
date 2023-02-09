import {BrowserRouter, Routes, Route} from "react-router-dom" ;
import App from "./App"
import Background from "./components/front-page-components/background";
import ShopPage from "./shop-page";

const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<App/>}/>
                <Route exact path="/" element={<Background/>}/>
                <Route exact path="/shop-page" element={<ShopPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default RouteSwitch
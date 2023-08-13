import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import Links from "./Links"
import Home from "./components/home"
import StyledWithProps from "./components/component-with-props"
import PolyMorphicProps from "./components/polymorphic-props"
import Attrs from "./components/Attrs"
import Animations from "./components/animations"
import AdvancedSelectors from "./components/adv-selectors"
import WholeThang from "./components/use-the-theme"

const theme = {
    dark: "black"
}

function Router () {

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={ <Links/> }>
                <Route path="home" element={<Home/>}/>
                <Route path='styled-with-props' element={<StyledWithProps/>}/>
                <Route path="polymorphic-props" element={<PolyMorphicProps/>}/>
                <Route path='attrs' element={<Attrs/>}/>
                <Route path='animations' element={<Animations/>}/>
                <Route path='adv-selectors' element={<AdvancedSelectors/>}/>
                <Route path="whole-thang" element={<WholeThang/>}/>
            </Route>
        )
    )

    return <RouterProvider router={router}></RouterProvider>
}

export default Router
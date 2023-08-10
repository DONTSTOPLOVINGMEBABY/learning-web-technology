import { createBrowserRouter, RouterProvider, Route } from "react-router-dom"
import App from "./App"
import Henry from "./henry"

function Router () {

    const router = createBrowserRouter([
        { path : '/', element : <App/> }, 
        { path : '/henry', element : <Henry/> }
    ])
    return <RouterProvider router={router} />
}

export default Router
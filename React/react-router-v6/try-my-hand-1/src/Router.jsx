import { 
    createBrowserRouter,
    createRoutesFromElements,  
    RouterProvider, 
    Route, 
    Navigate
} from "react-router-dom"
import App from "./App"
import Henry from "./henry"
import About from "./misc-components/About"
import Contact from "./misc-components/Contact"
import Login from "./misc-components/Login"
import Signup from "./misc-components/Signup"
import NotFound from "./misc-components/Notfound"
import AuthComponent from "./misc-components/Auth"
import TheData from "./misc-components/data"
import { dataLoader } from "./misc-components/data"
import Personal from "./misc-components/personal"
import AppWrapper from "./misc-components/appWrapper"

function Router () {

    // const router = createBrowserRouter([
    //     { path : '/', element : <App/> }, 
    //     { path : '/henry', element : <Henry/> },
    //     { 
    //         path : '/auth',
            
    //         element : <AuthComponent/>, 
    //         children : [
    //             {
    //                 path : 'login', 
    //                 element : <Login/>
    //             }, 
    //             {
    //                 path : 'signup', 
    //                 element : <Signup/>, 
    //             }
    //         ]  
    //     }, 
    //     {
    //         path : '/data', 
    //         element : <TheData/>, 
    //         loader : dataLoader, 
    //     }, 
    //     { path : '*', element : <NotFound/> }
    // ])

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route element={<AppWrapper/>}>
                <Route path="/" element={ <App/> }>
                    <Route path="/personal" element={<Personal/>}>
                        <Route path="henry" element={<Henry/>} />
                    </Route>
                    <Route path="auth" element={<AuthComponent/>}>
                        <Route path="login" element={<Login/>} />
                        <Route path="signup" element={<Signup/>}/>
                    </Route>
                    <Route path="data" element={<TheData/>} loader={dataLoader}/>
                    <Route path="*" element={<NotFound/>}/> 
                </Route>
            </Route>
        )
    )


    // const router2 = createBrowserRouter(
    //     createRoutesFromElements(
    //         <Route path="/" element={<App/>}>
    //             <Route path="about" element={<About/>}/>
    //             <Route path="contact" element={<Contact/>}/>
    //         <Route path="auth">
    //             <Route path="login" element={<Login/>} />
    //             <Route path="signup" element={<Signup/>}/>
    //         </Route>
    //         </Route>
    //     )
    // ) 

//    const theirRouter = createBrowserRouter(
//         createRoutesFromElements(
//             <Route path="/" element={<Henry />}>
//             <Route path="contact" element={<Contact />} />
//             <Route
//                 path="about"
//                 element={<About />}
//                 // loader={({ request }) =>
//                 // fetch("/api/dashboard.json", {
//                 //     signal: request.signal,
//                 // })
//                 // }
//             />
//             <Route element={<App />}>
//                 <Route
//                 path="login"
//                 element={<Login />}
//                 // loader={redirectIfUser}
//                 />
//                 <Route path="signup" element={<Signup/>} />
//             </Route>
//             </Route>
//         )
//         )


    return <RouterProvider router={router} />
}

export default Router
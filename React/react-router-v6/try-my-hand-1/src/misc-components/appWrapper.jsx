import { useNavigation, Outlet } from "react-router-dom";

export default function AppWrapper () {
    const { state } = useNavigation()
    console.log(state)
    if (state === 'loading') {
        return <div>Loading...</div>
    }
    return <Outlet/>
}


import { useEffect, useState, useMemo,   } from "react"
import { ThemeProvider } from "styled-components"
import ThemeContext from "./ThemeContext"
import ThemeStyles from "../styles/themes.styled"


function Theme ({ children,}) {
    const [theme, setTheme] = useState()
    const [dark, setDark] = useState()
    const [light, setLight] = useState()
    const changeTheme = () => {
        if (theme === 'dark'){
            setTheme('light')
            setDark(false)
            setLight(true)
        }
        else {
            setTheme('dark')
            setDark(true)
            setLight(false)
        }
    }
    useEffect( () => {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setTheme('dark')
        } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
            setTheme('light')
        } else {
            setTheme('light')
        }
    }, [])
    const context = useMemo( () => ({
        theme, 
        changeTheme, 
        dark, 
        light,
    }), [theme])
    return ( 
        <ThemeContext.Provider themeContext={context}>
            <ThemeProvider theme={ThemeStyles}>
                {children}
            </ThemeProvider>
        </ThemeContext.Provider> 
    )
}

export default Theme
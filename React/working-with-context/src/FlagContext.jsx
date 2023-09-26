import { createContext, useContext } from "react"

const FlagContext = createContext(undefined)

function useFlagContext () {
    let config = useContext(FlagContext)
    if (config === undefined) {
        throw new Error('You must provide a config to the FlagProvider')
    }
    return config
}

export { 
    useFlagContext, 
    FlagContext,     
} 
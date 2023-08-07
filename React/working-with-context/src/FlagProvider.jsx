import { FlagContext } from "./FlagContext"

function FlagProvider ({
    config, 
    children
}) {
    return <FlagContext.Provider value={config}>{children}</FlagContext.Provider>
}

export default FlagProvider
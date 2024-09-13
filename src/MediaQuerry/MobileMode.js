import { createContext } from "react"

export const MobileModeContext = createContext()

export default function MobileMode({children}) {
    const MobileQuerry = window.matchMedia(' (max-width: 450px) ')
    const MobileMode = MobileQuerry.matches
    return (
        <MobileModeContext.Provider value={MobileMode}>
            {children}
        </MobileModeContext.Provider>

    )
}
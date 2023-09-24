'use client'
import { createContext, useState } from "react";       

export const PopupFormToggle = createContext({
    basicOpen: true,
    setBasicState: () => {},
    socialOpen: false,
    setSocialState: () => {}
})

export const PopupFormToggleProvider = ({children}) => {
    const [basicOpen, setBasicState] = useState(true)
    const [socialOpen, setSocialState] = useState(false)
    
    const value = {
        basicOpen,
        setBasicState,
        socialOpen,
        setSocialState
    }

    return (
        <PopupFormToggle.Provider value={value}>
            {children}
        </PopupFormToggle.Provider>
    )
}
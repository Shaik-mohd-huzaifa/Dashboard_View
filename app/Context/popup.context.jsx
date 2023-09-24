'use client'
import { createContext, useEffect } from "react";
import { useState } from "react";


export const PopupContext = createContext({
    popUpOpen: null,
    setPopUp:()=> null
    })

export const PopUpContextProvider = ({children}) => {
    const [popUpOpen, setPopUp] = useState(false);

    const value = {
        popUpOpen, setPopUp
    }
    return (
        <PopupContext.Provider value={value}>
            {children}
        </PopupContext.Provider>
    )
} 
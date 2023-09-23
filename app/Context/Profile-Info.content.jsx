'use client'
import { createContext, useState } from "react";

const userDetails = {
    name: "",
    email: "",
    phone: "",
}

const socialDetails = {
    youtube: "",
    instagram: ""
}

export const ProfileInfoContext = createContext({
    userDetails: userDetails,
    setUserDetails: () => {},
    socialProfile: socialDetails,
    setSocialProfile: () => {}
})

export const ProfileInfoProvider = ({children}) => {
    const [userDetails, setUserDetails] = useState(userDetails);
    const [socialProfile, setSocialProfile] = useState(socialDetails);
    const value = {
        userDetails,
        setUserDetails,
        socialProfile,
        setSocialProfile
    }
    return(
        <ProfileInfoContext.Provider value={value}>
            {children}
        </ProfileInfoContext.Provider>
    )
}
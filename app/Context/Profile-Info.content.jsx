'use client'
import { createContext, useEffect, useState } from "react";

const userinfo = {
    name: "",
    email: "",
    phone: "",
}

const socialDetails = {
    youtube: "",
    instagram: ""
}

export const ProfileInfoContext = createContext({
    userDetails: userinfo,
    setUserDetails: () => {},
    socialProfile: socialDetails,
    setSocialProfile: () => {}
})

export const ProfileInfoProvider = ({children}) => {
    const [userDetails, setUserDetails] = useState(userinfo);
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
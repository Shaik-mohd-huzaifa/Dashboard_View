'use client'
import { createContext, useEffect, useState } from "react";
import supabase from "../api/supabase";

export const DashboardVisibilityContext = createContext({
    dashboardData: []
})

export const DashboardVisibilityProvider = ({children}) => {
    const [dashboardDataVisible, setDashboardVisibilty] = useState(false)
    const [dashboardData, setData] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            const {data, error} = await supabase.from('Dashboard').select('*');

    if(error){
        setData([])
    }

    setData(data);
    setDashboardVisibilty(true)
}    
fetchData()
}, [])
    
    const value = {dashboardDataVisible, setDashboardVisibilty, dashboardData}
    return (
        <DashboardVisibilityContext.Provider value={value}>
            {children}
        </DashboardVisibilityContext.Provider>
    )
}
import Image from "next/image";
import {signOut} from "next-auth/react";
import Styles from '../DashboardAnalysis.module.scss';
import supabase from "../api/supabase"
import { useEffect, useState } from "react";
import { getData} from '../api/getdata';
import Card from './analyticsCard';
import DashboardNavbar from './dashboardNavbar'

export const DashboardAnalysis = () => {
    const [data, setdata] = useState([]);
    useEffect(() => {
        getData().then(data => setdata(data));
        
    }, [])
    console.log(data);    
    return (
        <div className={Styles.AnalyticsContainer}>
            <DashboardNavbar/>
            <div className={Styles.miniAnalysisContainer}>
            {
                data.map(card => (
                    <Card key={card.id} imgsrc={`/${card.title}.png`} title={card.title} price={card.price} percentage={card.percentage}  />
                    ))
                }
                </div>
        </div>
    )
}
import Image from "next/image";
import {signOut} from "next-auth/react";
import Styles from './../../DashboardAnalysis.module.scss';
import supabase from "../../api/supabase"
import { useContext } from "react";
import {DashboardVisibilityContext} from '../../Context/dashboardDataProvider'
import Card from '../analyticsCard';
import DashboardNavbar from '../dashboardNavbar';
import BarGraph from "../BarGraphStructue";
import DonutChart from "../donutGraph";
import ProfileCard from "../profileAddition"
import DashboardDataError from '../DataFetch-Error/DataFetchError';
import { Fragment } from "react";

const colors = ["#80dc93", "#debf85", "#eaa4a3", "#a9b0e6"]

export const DashboardAnalysis = () => {
    const {dashboardData: data} = useContext(DashboardVisibilityContext)   
    return (
        <div className={Styles.AnalyticsContainer}>
            <DashboardNavbar/>
            {data ? 
            (<Fragment>
            <div className={Styles.miniAnalysisContainer}>
                {data.map((card, index) => (
                    <Card key={card.id} bgColor={colors[index]} imgsrc={`/${card.title}.svg`} title={card.title} price={card.price} percentage={card.percentage}  />
                ))}
                </div>
                
                <BarGraph/>
                <div className={Styles.boxes}>
                <DonutChart/>
                <ProfileCard/>
                </div>
                </Fragment>)
                : <DashboardDataError/>
                }
        </div>
    )
}
'use client'
import Image from "next/image";
import { useSession, signOut } from "next-auth/react";
import Styles from '../dashboard.module.scss';
import Navigation from '../Components/dashboardNavigation';
import {DashboardAnalysis} from '../Components/dashboardWhole';

const Dashboard = () => {
    return (
        <div className={Styles.dashboardContainer}>
            <Navigation/>
            <DashboardAnalysis/>
        </div>
    )
}

export default Dashboard;
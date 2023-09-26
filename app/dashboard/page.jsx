'use client'
import Image from "next/image";
import { useSession, signOut } from "next-auth/react";
import Styles from './dashboard.module.scss';
import Navigation from '../Components/dashboardNavigation';
import {DashboardAnalysis} from '../Components/Dashboard Whole Component/dashboardWhole';
import PopUp from './../Components/ProfilePopup'
import { useContext } from "react";
import { PopupContext } from './../Context/popup.context';


const Dashboard = () => {
    const {popUpOpen} = useContext(PopupContext);
    return (
        <div className={Styles.dashboardContainer}>
            <Navigation/>
            <DashboardAnalysis/>
            {
                popUpOpen && <PopUp/>
            }
        </div>
    )
}

export default Dashboard;
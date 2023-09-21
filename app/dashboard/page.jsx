'use client'
import Image from "next/image";
import { useSession, signOut } from "next-auth/react";
import Styles from '../dashboard.module.scss';
import Navigation from '../Components/dashboardNavigation';

const Dashboard = () => {
    const {data: session} = useSession();
    console.log(session)
    const signOutprocess = async () => {
        await signOut();
        window.location.href = '/';
    }
    return (
        <div className={Styles.dashboard-container}>
            <Navigation/>
        </div>
    )
}

export default Dashboard;
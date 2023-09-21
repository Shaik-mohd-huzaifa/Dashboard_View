'use client'
import {useSession, signOut, signIn} from 'next-auth/react'
import NavbarStyles from '../dashboardNavbar.module.scss'
import { useEffect, useState } from 'react';

const DashboardNavbar = () => {
    const {data: session} = useSession();   

    const signOutprocess = async () => {
        await signOut();
        window.location.href = '/';
    }
return (
    <div className={NavbarStyles.DNcontainer}>
        <button onClick={() => signOutprocess()}>Sign Out</button>
    </div>
)
}

export default DashboardNavbar;
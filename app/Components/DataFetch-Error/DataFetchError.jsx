// 'use client'
import Styles from "./dashboardErrors.module.scss"
import Image from 'next/image'

const DashboardDataError = () => {
    return (
        <div className={Styles.errorContainer}>
            <div className={Styles.error}>
            <Image src="/No Connection.svg" alt="No Connection" width="200" height="200"/>
            <p>Connection Lost / Refresh</p>
            <button className={Styles.refresh} onClick={() => window.location.reload()}>Refresh</button>
            </div>
        </div>
    )
}

export default DashboardDataError;
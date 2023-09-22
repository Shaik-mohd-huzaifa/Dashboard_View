import Image from "next/image"
import Styles from '../dashboardSideNav.module.scss';
const Navigation = () => {
    return (
        <div className={Styles.navigation}>
                <h2>.Pears</h2>
                <div className={Styles.navlinks}>
                    <li><Image width="20" height="20" src="/dashboard_icon.svg" alt=""/>
                        <span>Dashboard</span></li>
                    <li><Image width="20" height="20" src="/transaction_icon.svg" alt=""/>
                        <span>Transactions</span></li>
                    <li><Image width="20" height="20" src="schedule_icon.svg" alt=""/>
                        <span>Schedules</span></li>
                    <li><Image width="20" height="20" src="user_icon.svg" alt=""/>
                        <span>Users</span></li>
                    <li><Image width="20" height="20" src="setting_icon.svg" alt=""/>
                        <span>Settings</span></li>
                </div>
        <div className={Styles.instantlinks}>
            <a href="">Help</a>
            <a href="">Contact Us</a>
        </div>
            </div>
    )
} 

export default Navigation;
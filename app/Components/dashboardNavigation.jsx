import Image from "next/image"
import Styles from '../dashboard.module.scss';
const Navigation = () => {
    return (
        <div className={Styles.navigation}>
                <h2>.Pears</h2>
                <div className={Styles.navlinks}>
                    <li><Image width="20" height="20" src="" alt=""/>
                        <span>Dashboard</span></li>
                    <li><Image width="20" height="20" src="" alt=""/>
                        <span>Transactions</span></li>
                    <li><Image width="20" height="20" src="" alt=""/>
                        <span>Schedules</span></li>
                    <li><Image width="20" height="20" src="" alt=""/>
                        <span>Users</span></li>
                    <li><Image width="20" height="20" src="" alt=""/>
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
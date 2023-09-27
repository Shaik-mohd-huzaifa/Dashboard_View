import Image from 'next/image';
import {useSession, signOut, signIn} from 'next-auth/react'
import NavbarStyles from '../dashboardNavbar.module.scss'
import Profile from './Profile';

const DashboardNavbar = () => {
    const {data: session}= useSession()
return (
    <div className={NavbarStyles.DNcontainer}>
        <h2>Dashboard</h2>
        <div className={NavbarStyles.profileContainer}>
        <div className={NavbarStyles.inputContainer}>
        <input className='bg-zinc-100' type="text" placeholder='Search'/>
        <Image src="/Search icon.svg" alt="" width="15" height="15" />
        </div>
        <Image src="/Vector.svg" width="20" height="20" alt='Bell Icon'/>
        {
            session ? <Profile/> : <Image className={NavbarStyles.signinImg} src="/sign-out-30.png" width="30" height="30" alt='sign in' onClick={() => window.location.href = "/"}/>
        }
        </div>
    </div>
)
}

export default DashboardNavbar;
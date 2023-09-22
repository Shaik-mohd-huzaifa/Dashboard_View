'use client'
import Image from 'next/image';
import {useSession, signIn, signOut} from 'next-auth/react';
import ProfileStyles from '../Profile.module.scss';
import { useState } from 'react';

const Profile = () => {
    const {data: session} = useSession();
    const [profileOpen, setProfileopen] = useState(false);
    const signOutprocess = async () => {
        await signOut();
        window.location.href = '/';
    }
    if(session && session.user){
        return (
            <div className={ProfileStyles.profileContainer}>
                <Image onClick={() => setProfileopen(!profileOpen)} src={session.user.image} width="35" height="35" alt="Profile"/>
                {profileOpen && (
                    <div className={ProfileStyles.profilelinks}>
                        <li>
                            <Image src="/user.png" width="20" height="20" alt='profile'/>
                            <span>Profile</span>
                        </li>
                        <li>
                            <Image src="/settings.png" width="20" height="20" alt='profile'/>
                        <span>Settings</span></li>
                        <li onClick={() => signOut()}>
                            <Image src="/sign-out.png" width="20" height="20" alt='profile'/>
                            <span>Sign Out</span>
                            </li>
                    </div>
                )}
            </div>
        )
    }
}

export default Profile
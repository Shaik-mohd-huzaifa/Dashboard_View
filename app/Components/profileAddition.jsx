'use client'
import Image from 'next/image';
import Styles from '../ProfileCard.module.scss'
import { useState } from 'react';
import { useContext } from 'react';
import { PopupContext } from '../Context/popup.context';
import {ProfileInfoContext} from '../Context/Profile-Info.content'
import DisplayProfileData from './DisplayProfile'

const ProfileCard = () => {
    const {popUpOpen, setPopUp} = useContext(PopupContext)
    const {userDetails, socialProfile} = useContext(ProfileInfoContext)
    return (
        <div className={Styles.ProfileCard}>
            { userDetails.name || userDetails.email || userDetails.phone || socialProfile.instagram || socialProfile.youtube ? <DisplayProfileData/> : (<div className={Styles.AddIconContainer}>
            <div className={Styles.Button} onClick={() => setPopUp(!popUpOpen)}>
            <Image src="/Controls.svg" width="50" height="50" alt="Add Profile" />
            </div>
            <p>
                Add Profile
            </p>
            </div>)}
        </div>
    )
}

export default ProfileCard;
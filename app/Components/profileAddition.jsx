import Image from 'next/image';
import Styles from '../ProfileCard.module.scss'
import { useState } from 'react';
import { useContext } from 'react';
import { PopupContext } from '../Context/popup.context';

const ProfileCard = () => {
    const {popUpOpen, setPopUp} = useContext(PopupContext)
    return (
        <div className={Styles.ProfileCard}>
            <div className={Styles.AddIconContainer}>
            <div className={Styles.Button} onClick={() => setPopUp(!popUpOpen)}>
            <Image src="/controls.svg" width="50" height="50" alt="Add Profile" />
            </div>
            <p>
                Add Profile
            </p>
            </div>
        </div>
    )
}

export default ProfileCard;
import Image from 'next/image';
import Styles from '../ProfileCard.module.scss'
import { useState } from 'react';

const ProfileCard = () => {
    const [AddprofilePopUp, setProfilePopUp] = useState(false);
    return (
        <div className={Styles.ProfileCard}>
            <div className={Styles.AddIconContainer}>
            <div className={Styles.Button} onClick={() => setProfilePopUp(!AddprofilePopUp)}>
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
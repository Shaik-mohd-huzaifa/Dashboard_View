'use client'
import Image from "next/image";
import { useContext, useState} from "react";
import {ProfileInfoContext} from './../Context/Profile-Info.content'
import Styles from './../ProfileCard.module.scss';
import {IndiviualInfo} from "./Individual-Info-disp"
import {PopupContext} from './../Context/popup.context'

const DisplayProfileData = () => {
    const { userDetails, socialProfile } = useContext(ProfileInfoContext);
    const {setPopUp, popUpOpen} = useContext(PopupContext)
    return (
        <div className={Styles.InfoContainer}>
            { (userDetails.name || userDetails.email || userDetails.phone) && (<div className={Styles.info}>
                {userDetails.name && <IndiviualInfo imgsrc="/user-20.png" value={userDetails.name} title="username" />}
                {userDetails.email && <IndiviualInfo imgsrc="/mail.png" type="link" value={userDetails.email} title="Email" />}
                {userDetails.phone && <IndiviualInfo imgsrc="/phone.png" value={userDetails.phone} title="Phone" />}
            </div>)}
            {
                (socialProfile.instagram || socialProfile.youtube) && (
                    <div className={Styles.info}>
                    {socialProfile.instagram && <IndiviualInfo imgsrc="/instagram.png" type="link" value={socialProfile.instagram} title="instagram"/>}
                    {socialProfile.youtube && <IndiviualInfo imgsrc="/youtube.png" type="link" value={socialProfile.youtube} title="youtube"/>}
                    </div>
    )
            }
        <Image src="/edit.svg" width="20" height="20" alt="Edit" onClick={() => setPopUp(!popUpOpen)} className={Styles.edit}/>
        </div>
    )
} 

export default DisplayProfileData
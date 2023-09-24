import { useContext, useState} from "react";
import {ProfileInfoContext} from './../Context/Profile-Info.content'
import Styles from './../ProfileCard.module.scss';
import {IndiviualInfo} from "./Individual-Info-disp"

const DisplayProfileData = () => {
    const { userDetails, socialProfile } = useContext(ProfileInfoContext);
    return (
        <div className={Styles.InfoContainer}>
            { userDetails.name || userDetails.email || userDetails.phone && (<div className={Styles.info}>
                {userDetails.name && <IndiviualInfo imgsrc="/user-20.png" value={userDetails.name} title="username" />}
                {userDetails.email && <IndiviualInfo imgsrc="/email.png" value={userDetails.email} title="Email" />}
                {userDetails.phone && <IndiviualInfo imgsrc="/phone.png" value={userDetails.phone} title="Phone" />}
            </div>)}
            {
                socialProfile.instagram || socialProfile.youtube && (
                    <div className={Styles.info}>
                    {socialProfile.instagram && <IndiviualInfo imgsrc="/instagram" value={socialProfile.instagram} title="instagram"/>}
                    {socialProfile.youtube && <IndiviualInfo imgsrc="/youtube" value={socialProfile.youtube} title="youtube"/>}
                    </div>
    )
            }
        </div>
    )
} 

export default DisplayProfileData
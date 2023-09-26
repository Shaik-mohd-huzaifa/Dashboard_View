'use client'
import { useContext, useState } from "react";
import {PopupFormToggle} from './../Context/Toggle-Popup';
import {PopupContext} from './../Context/popup.context';
import {ProfileInfoContext} from './../Context/Profile-Info.content'
import Styles from './../form.module.scss'

const SocialForm = () => {
    const {socialOpen, basicOpen, setBasicState, setSocialState} = useContext(PopupFormToggle);
    const {popUpOpen, setPopUp} = useContext(PopupContext)
    const {socialProfile, setSocialProfile} = useContext(ProfileInfoContext)
    const [youtubeLink, setYoutubeLink] = useState(socialProfile.youtube)
    const [instagramLink, setInstagramLink] = useState(socialProfile.instagram)
    const handlePrev = () => {
        setBasicState(!basicOpen);
        setSocialState(!socialOpen);
    }

    const handleSocialAndSubmission = () => {
        setBasicState(!basicOpen);
        setSocialState(!socialOpen);
        setPopUp(!popUpOpen);
        setSocialProfile({
            ...socialProfile,
            youtube: youtubeLink, 
            instagram: instagramLink
        })
    }

    return (
        <div className={Styles.formContainer}>
            <div className={Styles.inputBox}>
                <label htmlFor="Instagram">Instagram Link (Optional)</label>
                <input type="text" name="Instagram" onChange={(e) => setInstagramLink(e.target.value)} value={instagramLink}  placeholder="Eg. ..instagram.com/username"/>
            </div>
            <div className={Styles.inputBox}>
                <label htmlFor="Youtube">Youtube Link (Optional)</label>
                <input type="text" name="Youtube" onChange={(e) => setYoutubeLink(e.target.value)} value={youtubeLink} placeholder="Eg. ..youtube/username"/>
            </div>
            <div className={Styles.buttonContainer}>
                <button onClick={() => handlePrev()}>Prev</button>
                <button onClick={() => handleSocialAndSubmission()}>Done</button> 
            </div>
        </div>
    )
}

export default SocialForm;
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
    }

    const handleSocialAndSubmission = () => {
        setSocialState(!socialOpen);
        setPopUp(!popUpOpen);
        setSocialProfile({
            ...socialProfile,
            youtubeLink, 
            instagramLink
        })
    }

    return (
        <div className={Styles.formContainer}>
            <div className={Styles.inputBox}>
                <label htmlFor="Instagram">Instagram Link (Optional)</label>
                <input type="text" name="Instagram" value={instagramLink}  placeholder="Eg. ..instagram.com/username"/>
            </div>
            <div className={Styles.inputBox}>
                <label htmlFor="Youtube">Youtube Link (Optional)</label>
                <input type="text" name="Youtube" value={instagramLink} placeholder="Eg. ..youtebe/username"/>
            </div>
            <div className={Styles.buttonContainer}>
                <button onClick={() => handlePrev()}>Prev</button>
                <button onClick={() => handleSocialAndSubmission()}>Done</button>
            </div>
        </div>
    )
}

export default SocialForm;
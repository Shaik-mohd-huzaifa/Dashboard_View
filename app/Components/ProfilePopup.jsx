'use client'
import Styles from '../Popup.module.scss';
import Image from 'next/image';
import { useContext, useState } from 'react';
import { PopupContext } from '../Context/popup.context';
import {PopupFormToggle} from '../Context/Toggle-Popup'
import BasicsForm from './basics-form'
import SocialForm from './Social-form'

const PopUp = () => {
    const {popUpOpen, setPopUp} = useContext(PopupContext);   
    const {basicOpen, socialOpen} = useContext(PopupFormToggle);   
    const handleProfilePopUp = (e) => {
        setPopUp(!popUpOpen)
    }

    return (
       <div className={Styles.PopupContainer}>
        <div className={Styles.PopUp}>
            <div className={Styles.header}>
                <h2>Add New Profile</h2>
                <Image src="/Controls.svg" width="20" height="20" alt="Close" onClick={() => {handleProfilePopUp()}}/>
            </div>
        <div className={Styles.Options}>
            <div className={`${Styles.Option} ${basicOpen && Styles.active}`} id="basics">
                <h2>Basic</h2>
                <div className={Styles.line}></div>
            </div>
            <div className={`${Styles.Option} ${socialOpen && Styles.active}`} id="social">
                <h2>Social</h2>
                <div className={Styles.line}></div>
            </div>
        </div>
        {basicOpen && <BasicsForm/>}
        {socialOpen && <SocialForm/>}
        </div>
       </div> 
    )
}

export default PopUp;
'use client'
import Styles from '../Popup.module.scss';
import Image from 'next/image';
import { useContext, useState } from 'react';
import { PopupContext } from '../Context/popup.context';
const PopUp = () => {
    const {popUpOpen, setPopUp} = useContext(PopupContext);   
    const [basicOn, setBasic] = useState(true);
    const [SocialOn, setSocial] = useState(false);
    const handleProfilePopUp = (e) => {
        setPopUp(!popUpOpen)
    }

    const handleToggle = (e) => {
        console.log(e);
        let value = e.target.value;
        if(value == "basics"){
            basicOn(true)
        }else{
            basicOn(false)
            SocialOn(true)
        }
    }

    return (
       <div className={Styles.PopupContainer}>
        <div className={Styles.PopUp}>
            <div className={Styles.header}>
                <h2>Add New Profile</h2>
                <Image src="/Controls.svg" width="20" height="20" alt="Close" onClick={() => {handleProfilePopUp()}}/>
            </div>
        <div className={Styles.Options}>
            <div className={`${Styles.Option} ${basicOn && Styles.active}`} value="basics" onClick={(e) => handleToggle(e)}>
                <h2>Basic</h2>
                <div className={Styles.line}></div>
            </div>
            <div className={`${Styles.Option} ${SocialOn && Styles.active}`} onClick={() => handleToggle()}>
                <h2>Social</h2>
                <div className={Styles.line}></div>
            </div>
        </div>
        </div>
       </div> 
    )
}

export default PopUp;
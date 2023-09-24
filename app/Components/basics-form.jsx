import { useContext, useEffect, useState } from "react";
import {ProfileInfoContext} from './../Context/Profile-Info.content';
import Styles from './../form.module.scss';
import {PopupFormToggle} from './../Context/Toggle-Popup'

const BasicsForm = () => {
    const {userDetails, setUserDetails} = useContext(ProfileInfoContext)
    const {basicOpen, socialOpen, setBasicState, setSocialState} = useContext(PopupFormToggle);
    const [name, setName] = useState(userDetails.name);
    const [email, setEmail] = useState(userDetails.email);
    const [phone, setPhone] = useState(userDetails.phone);

    const handlebasic = () => {
        setUserDetails({
            ...userDetails,
            name,
            email,
            phone
        })
        setBasicState(false)
        setSocialState(true)
    }

    return(
        <div className={Styles.formContainer}>
            <div className={Styles.inputBox}>
                <label htmlFor="name">Username<sup>*</sup></label>
                <input type="text" name="name" placeholder="Eg. John Doe" onChange={e => setName(e.target.value)} value={name}/>
            </div>
            <div className={Styles.inputBox}>
                <label htmlFor="name">Email<sup>*</sup></label>
                <input type="text" name="Email" placeholder="Eg. John@xyz.com" onChange={e => setEmail(e.target.value)} value={email}/>
            </div>
            <div className={Styles.inputBox}>
                <label htmlFor="name">Phone<sup>*</sup></label>
                <input type="text" name="Phone" placeholder="Eg. John@xyz.com" onChange={e => setPhone(e.target.value)} value={phone}/>
            </div>
            <div className={Styles.buttonContainer}>
            <button onClick={() => handlebasic()}>Next</button>
            </div>
        </div>
    )
}

export default BasicsForm;
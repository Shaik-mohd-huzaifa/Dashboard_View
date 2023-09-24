import Styles from "./../ProfileCard.module.scss";
import Image from "next/image";

export const IndiviualInfo = ({imgsrc, title, value}) => {
    return (
        <div className={Styles.IndiInfoContainer}>
            <Image src={imgsrc} width="20" height="20" alt={title}/>
                <span>{value}</span>
        </div>
    )
} 
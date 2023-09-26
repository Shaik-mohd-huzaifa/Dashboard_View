import Styles from "./../ProfileCard.module.scss";
import Image from "next/image";

export const IndiviualInfo = ({imgsrc, title, value, type}) => {
    return (
        <div className={Styles.IndiInfoContainer}>
            <Image src={imgsrc} width="20" height="20" alt={title}/>
                {type === 'link' ? <a href={`https://${value}`} target="_blank">{value}</a> : <span>{value}</span>}
        </div>
    )
} 
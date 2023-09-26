import CardStyling from '../card.module.scss';
import Image from 'next/image';

const Card = ({ imgsrc, title, price, percentage, bgColor}) => {

    return (
        <div className={CardStyling.cardcontainer}>
            <div className={CardStyling.imgContainer} style={{backgroundColor: bgColor}}>
            <Image src={imgsrc} width="35" height="35" alt={title}/>
            </div>
            <p className={CardStyling.title}>{title}</p>
            <div className={CardStyling.pricingContainer}>
                <span className={CardStyling.price}>{price}</span>
                <span className={CardStyling.percentage}>{percentage}%</span>
            </div>
        </div>
    ) 
}

export default Card;
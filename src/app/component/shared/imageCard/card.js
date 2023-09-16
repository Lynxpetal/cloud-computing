import styles from "styles/header.scss";
import TarcLogo from "../header/tarcLogo";
import Image from "next/image";

export default function Header(title, imageSRC, cardDesc) {
    return ( 
            <div className="card" >
                <div className="cardTitle" >
                    {title}
                </div>
                <div className="cardImage">
                    <Image id={title} src={imageSRC} />
                </div>
                <div className="cardDesc" >
                    {cardDesc}
                </div>
            </div>
    );
}
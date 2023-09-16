import Image from "next/image";
import Link from "next/link";

export default function IconCard({ name, href, icon }) {
    return (
        <Link href={href}>
            <div className="linkCard centerFlex">
                <div className="linkCardUpper centerFlex">
                    <div className={"image-container"}>
                        <Image src={icon} fill={true} className={"image"} />
                    </div>
                </div>
                <div className="linkCardLower centerFlex">{name}</div>
            </div>
        </Link>
    );
}
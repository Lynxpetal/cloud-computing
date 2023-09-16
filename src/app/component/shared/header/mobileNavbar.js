// React
import Link from "next/link";

// Json
import navLinks from "json/navLinks.json";

// Components
import SvgIcon from "../SvgIcon";

const MobileNavbar = ({ show, setShowMobileNavbar }) => {
    const iconSize = 20;
    return (
        <div className={"mobileNavbar " + (show ? " show" : "")}>
            <Link
                key={"Home"}
                href={"/focs"}
                className="col centerFlex mobileNavLinkElement"
                onClick={(e) => {
                    setShowMobileNavbar(false);
                }}>
                <div className="mobileNavbarRow">
                    <SvgIcon
                        src={"/svg/house-solid-white.svg"}
                        height={iconSize}
                        width={iconSize}
                    />
                    <div className="centerFlex mobileNavbarText">Home</div>
                </div>
            </Link>
            {navLinks.map((each) => {
                return (
                    <Link
                        key={each.name}
                        href={each.href}
                        className="col centerFlex mobileNavLinkElement"
                        onClick={(e) => {
                            setShowMobileNavbar(false);
                        }}>
                        <div className="mobileNavbarRow">
                            <SvgIcon src={each.icon} height={iconSize} width={iconSize} />
                            <div className="centerFlex mobileNavbarText">{each.name}</div>
                        </div>
                    </Link>
                );
            })}
        </div>
    );
};

export default MobileNavbar;

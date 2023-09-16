// React
import Link from "next/link";

// Json
import navLinks from "json/navLinks.json";

// Components
import SvgIcon from "../SvgIcon";
import UserButton from "./userButton";

// Styles
import "@/styles/special/hover3d.scss";

export default function Navbar({ toggleShowMobileNavbar }) {
    const iconSize = 20;

    return (
        <div className="row navBarRow" style={{ height: "100%", alignItems: "end" }}>
            <div className="navBarRowLeft col-11">
                <div className="row" style={{ height: "100%", flexWrap: "nowrap" }}>
                    <Link key={"Home"} href={"/focs"} className="col hover-3d navLinkElement">
                        <SvgIcon
                            src={"/svg/house-solid-white.svg"}
                            height={iconSize}
                            width={iconSize}
                        />
                        <div className="centerFlex navText">Home</div>
                    </Link>
                    {navLinks.map((each) => {
                        return (
                            <Link
                                key={each.name}
                                href={each.href}
                                className="col navLinkElement hover-3d">
                                <SvgIcon src={each.icon} height={iconSize} width={iconSize} />
                                <div className="centerFlex navText">{each.name}</div>
                            </Link>
                        );
                    })}
                </div>
            </div>
            <div className="col-1 centerFlex" style={{ height: "50%" }}>
                <div
                    onClick={(e) => {
                        toggleShowMobileNavbar();
                    }}
                    style={{ cursor: "pointer" }}>
                    <SvgIcon
                        classes={"menuMobile"}
                        src={"/svg/bars-solid-black.svg"}
                        width={25}
                        height={25}
                    />
                </div>
                <UserButton />
            </div>
        </div>
    );
}

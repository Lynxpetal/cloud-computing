import Link from "next/link";
import SvgIcon from "./SvgIcon";

const EnlargeableImage = ({ src, showText, showBorder }) => {
    showText ??= false;
    showBorder ??= false;
    return (
        <div className="centerFlex" style={{ flexDirection: "column" }}>
            {showText && (
                <Link className="hover-gold mb-2" href={src} target="_blank">
                    <div style={{ display: "inline-flex", flexDirection: "row" }}>
                        Click to Enlarge Image&nbsp;&nbsp;
                        <SvgIcon
                            src="/svg/external-link-alt-solid-gold.svg"
                            width={16}
                            height={16}
                        />
                    </div>
                </Link>
            )}
            <Link className="hover-gold" href={src} target="_blank">
                <div
                    className="image-container"
                    style={{ position: "relative", border: (showBorder ? "2px solid gold" : "") }}>
                    <img style={{ maxWidth: "100%" }} src={src} />
                </div>
            </Link>
        </div>
    );
};

export default EnlargeableImage;

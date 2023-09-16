// Styles
import "@/styles/components/textBlock.scss";

// Components
import SvgIcon from "./SvgIcon";

const TextBlock = ({
    className,
    title,
    titleStyles,
    titleIcon,
    titleColon,
    bodyText,
    showTitle,
}) => {
    showTitle ??= true;
    return (
        <div className={(className ?? "") + " textBlock"}>
            {showTitle && <div className="textBlockTitle mb-2">
                {titleIcon && <SvgIcon src={titleIcon} height={20} width={20} />}
                <div className="titleText" style={titleStyles ?? titleStyles}>
                    {title}
                    {titleColon ?? ":"}
                </div>
            </div>}
            <div className="textBlockBody">
                {Array.isArray(bodyText) ? (
                    <ul>
                        {bodyText.map((each) => {
                            return (
                                <li>
                                    {each}
                                    <br />
                                </li>
                            );
                        })}
                    </ul>
                ) : (
                    bodyText
                )}
            </div>
        </div>
    );
};

export default TextBlock;

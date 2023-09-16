import SvgIcon from "../SvgIcon";

// Styles
import "@/styles/components/chatbot.scss";

const ChatbotIcon = ({ invokeHandler }) => {
    const iconSize = 35;
    return (
        <div className="chatbotIcon" onClick={invokeHandler}>
            <SvgIcon
                src={"/svg/comment-dots-regular-white.svg"}
                width={iconSize}
                height={iconSize}
            />
        </div>
    );
};

export default ChatbotIcon;

"use client";
// React
import { useState } from "react";

// Styles
import "@/styles/components/chatbot.scss";

// Components
import ChatbotIcon from "./ChatbotIcon";
import ChatbotOverlay from "./ChatbotOverlay";

const Chatbot = () => {
    const [chatbotVisible, setChatbotVisible] = useState(false)

    const toggleShowChatbot = () => {
        setChatbotVisible(!chatbotVisible)
    }

    return (
        <>
            <ChatbotIcon invokeHandler={e => {toggleShowChatbot()}} />
            <ChatbotOverlay visible={chatbotVisible} closeOverlay={e => {setChatbotVisible(false)}} />
        </>
    );
};

export default Chatbot;

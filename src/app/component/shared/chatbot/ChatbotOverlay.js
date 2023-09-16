"use client";
// React
import { useState, useEffect } from "react";

// Json
import faqList from "@/json/faq.json";

const ChatbotOverlay = ({ visible, closeOverlay }) => {
    const [level, setLevel] = useState(0);
    const [category, setCategory] = useState("");
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");

    const handleBackButton = (e) => {
        if (level > 0) {
            setLevel(level - 1);
        }
    };

    const handleQuestionClick = (e) => {
        let chosenIdx = e.target.dataset.idx;
        if (level == 0) {
            let chosen = faqList[chosenIdx];
            setCategory(chosen.id);
            setLevel(level + 1);
        } else if (level == 1) {
            let chosen = faqList.find((each) => each.id == category).questions[chosenIdx];
            setLevel(level + 1);
            setQuestion(chosen.question);
            setAnswer(chosen.answer);
        }
    };

    useEffect(() => {
        document.querySelector(".chatbotOverlay .answerBox").innerHTML = answer;
    }, [answer]);

    var questionList = [
        {
            title: "What do you want to ask about?",
            questions: faqList.map((each, idx) => {
                return (
                    <button
                        key={idx}
                        data-idx={idx}
                        onClick={handleQuestionClick}
                        className="btn selectionBox"
                        type="button">
                        {each.category}
                    </button>
                );
            }),
        },
        {
            title:
                level == 1 &&
                "What do you want to ask about " +
                    faqList.find((each) => each.id == category).category +
                    "?",
            questions:
                level == 1 &&
                faqList
                    .find((each) => {
                        return each.id == category;
                    })
                    .questions.map((each, idx) => {
                        return (
                            <button
                                key={idx}
                                data-idx={idx}
                                onClick={handleQuestionClick}
                                className="btn selectionBox"
                                type="button">
                                {each.question}
                            </button>
                        );
                    }),
        },
        {
            title: level == 2 && question,
        },
    ];

    return (
        <>
            <div
                className={"chatbotBackCover" + (visible ? " visible" : "")}
                onClick={closeOverlay}></div>
            <div className={"chatbotOverlay" + (visible ? " visible" : "")}>
                <div className="centerFlex top">FAQ Chatbot</div>
                <div className={"backSection" + (level == 2 ? " answerShowing" : "")}>
                    {level > 0 && (
                        <button
                            type="button"
                            className="btn chatbotBackBtn"
                            onClick={handleBackButton}>
                            <svg
                                fill="gray"
                                xmlns="http://www.w3.org/2000/svg"
                                height="1em"
                                viewBox="0 0 448 512">
                                <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
                            </svg>
                        </button>
                    )}
                    <div className="question">{questionList[level].title}</div>
                </div>
                <div className="bodyBox">
                    <div className="questionBox">{questionList[level].questions}</div>
                    <div className={"answerBox" + (level == 2 ? " answerShowing" : "")}></div>
                </div>
            </div>
        </>
    );
};

export default ChatbotOverlay;

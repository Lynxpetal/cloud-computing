import Link from "next/link";
import scrollToTop from "@/lib/scrollToTop";

import MyButton from "../MyButton";

const btnHandler = (code) => {
    // let current = localStorage.getItem("programmeComparisonList");
    // let newList = current == null ? [] : JSON.parse(current);
    // if (!newList.includes(code)) newList.push(code);

    // localStorage.setItem("programmeComparisonList", JSON.stringify(newList));
    // document.querySelector("#programmeComparisonJumpPoint").click();
    scrollToTop();
};

const EnrolProgramme = ({ code }) => {
    return (
        <>
            <Link
                // className="d-none"
                id="programmeComparisonJumpPoint"
                href={"/focs/qualificationAssessment?enrol=" + code}>
                <MyButton
                    classes={"mt-3 btn"}
                    text={"Enrol this Programme"}
                    onClick={(e) => {
                        btnHandler(code);
                    }}
                />
            </Link>
        </>
    );
};

export default EnrolProgramme;

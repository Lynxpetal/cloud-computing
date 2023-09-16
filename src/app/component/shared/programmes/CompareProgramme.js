import Link from "next/link";
import scrollToTop from "@/lib/scrollToTop";
import MyButton from "../MyButton";

const btnHandler = (code) => {
    let current = localStorage.getItem("programmeComparisonList");
    let newList = current == null ? [] : JSON.parse(current);
    if (!newList.includes(code)) newList.push(code);

    localStorage.setItem("programmeComparisonList", JSON.stringify(newList));
    document.querySelector("#programmeComparisonJumpPoint").click();
    scrollToTop();
};

const CompareProgramme = ({ code }) => {
    return (
        <>
            <MyButton
                classes={"mt-3 btn"}
                text={"Compare This Programme"}
                onClick={(e) => {
                    btnHandler(code);
                }}
            />
            {/* <button type="button" className="btn btn-success" data-code={code} onClick={btnHandler}>
                Compare This Programme
            </button> */}
            <Link
                className="d-none"
                id="programmeComparisonJumpPoint"
                href={"/focs/programmeComparison"}></Link>
        </>
    );
};

export default CompareProgramme;

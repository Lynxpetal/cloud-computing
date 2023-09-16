// React
import Link from "next/link";

// Styles
import "@/styles/components/categoryList.scss";
import "@/styles/special/hover3d.scss"

// JSON
import programmeList from "@/json/programmes.json";

const CategoryList = ({ category, filterKeyword }) => {
    let filteredList = programmeList.filter((each) => {
        return category == "ALL" || each.category == category;
    });

    let finalOutput = filteredList
        .filter((each) => {
            let filterKeywordLowered = filterKeyword.toLowerCase()

            // Name
            if (each.name.toLowerCase().includes(filterKeywordLowered)) {
                return true;
            }

            // Course outline
            for (let i = 0; i < each.programmeOutline.length; i++) {
                for (let j = 0; j < each.programmeOutline[i].list.length; j++)  {
                    if (each.programmeOutline[i].list[j].toLowerCase().includes(filterKeywordLowered)) {
                        return true;
                    }
                }
            }

            // Career prospect
            for (let i = 0; i < each.careerProspect.length; i++) {
                if (each.careerProspect[i].toLowerCase().includes(filterKeywordLowered)) {
                    return true;
                }
            }

            return false;
        })
        .map((each) => {
            return (
                <li className="categoryListItem">
                    <Link className="hover-gold" href={`/focs/programmes/detail?prog=${each.code}`}>
                        {each.name}
                    </Link>
                </li>
            );
        });
    return (
        <div
            className="categoryList"
            style={{ textAlign: finalOutput.length == 0 ? "center" : "left" }}>
            {finalOutput.length == 0 ? (
                <div className="lead mb-3">Nothing matches your search...</div>
            ) : (
                <ul>{finalOutput}</ul>
            )}
        </div>
    );
};

export default CategoryList;

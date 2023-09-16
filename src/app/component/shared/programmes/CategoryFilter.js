"use client";
import "@/styles/components/categoryFilter.scss";

const CategoryFilter = ({ categories, selected, changeHandler }) => {
    return (
        <div className="categoryFilter" style={{ width: "90%" }}>
            {categories.map((each) => {
                return (
                    <div
                        className={"mycol prevent-select" + (selected == each ? " active" : "")}
                        data-id={each}
                        onClick={(e) => {
                            if (selected != e.target.dataset.id) changeHandler(e.target.dataset.id);
                        }}>
                        {each}
                    </div>
                );
            })}
        </div>
    );
};

export default CategoryFilter;

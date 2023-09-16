// React
import Link from "next/link";

// Components
import ProgrammeRow from "./ProgrammeRow";

// Json
import campusList from "@/json/campus.json";
import programmeList from "@/json/programmes.json";

const ProgrammeTable = ({ programmes, removeHandler }) => {
    var extendTable = programmes.length > 3;

    return (
        <div className={"col programmeTable" + (extendTable ? " horizontalScroll" : "")}>
            <table className="table table-striped table-hover">
                <thead className="table-dark">
                    <tr>
                        <th></th>
                        {programmes.map((each) => {
                            return (
                                <th>
                                    <div className="centerFlex">
                                        <button
                                            type="button"
                                            className="btn btn-danger"
                                            onClick={(e) => {
                                                removeHandler(each.code);
                                            }}>
                                            Remove
                                        </button>
                                    </div>
                                </th>
                            );
                        })}
                    </tr>
                    <tr>
                        <th scope="row" className="progCol">
                            Programme Title
                        </th>
                        {programmes.map((each) => {
                            return (
                                <th className="flexCenter textCenter">
                                    <Link
                                        className="title"
                                        href={`/focs/programmes/detail?prog=${each.code}`}>
                                        <div>{each.name}</div>
                                    </Link>
                                </th>
                            );
                        })}
                    </tr>
                </thead>
                <tbody>
                    <ProgrammeRow
                        label="Education Level"
                        programmes={programmes}
                        field="category"
                    />
                    <ProgrammeRow label="Intake" programmes={programmes} field="intake" />
                    <ProgrammeRow label="Duration" programmes={programmes} field="duration" />
                    <ProgrammeRow
                        label="Campus"
                        programmes={programmes}
                        field="campusCode"
                        fieldHandler={(data) => {
                            return (
                                <ul>
                                    {data.map((campus) => {
                                        return (
                                            <li>
                                                {campus +
                                                    " - " +
                                                    campusList.find((each) => {
                                                        return each.code == campus;
                                                    }).name}
                                            </li>
                                        );
                                    })}
                                </ul>
                            );
                        }}
                    />
                    <ProgrammeRow
                        label="Programme Outline"
                        programmes={programmes}
                        field="programmeOutline"
                        fieldHandler={(data) => {
                            return data.map((each) => {
                                return (
                                    <>
                                        <span style={{ textDecoration: "underline" }}>
                                            {each.name + " Courses"}
                                        </span>
                                        <br />
                                        <ul>
                                            {each.list.map((a) => {
                                                return <li>{a}</li>;
                                            })}
                                        </ul>
                                    </>
                                );
                            });
                        }}
                    />
                    <ProgrammeRow
                        label="Career Prospect"
                        programmes={programmes}
                        field="careerProspect"
                    />
                    <ProgrammeRow
                        label="Academic Progression"
                        programmes={programmes}
                        field="academicProgression"
                        fieldHandler={(data) => {
                            return (
                                <>
                                    <span style={{ textDecoration: "underline" }}>
                                        {data.description}
                                    </span>
                                    <br />
                                    <ul>
                                        {data.list.map((a) => {
                                            return (
                                                <li>
                                                    <Link
                                                        className="hover-gold"
                                                        href={`/focs/programmes/detail?prog=${a}`}>
                                                        {
                                                            programmeList.find((b) => {
                                                                return b.code == a;
                                                            }).name
                                                        }
                                                    </Link>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </>
                            );
                        }}
                    />
                    <ProgrammeRow
                        label="Estimated Total Fees"
                        programmes={programmes}
                        field="estimatedTotalFees"
                    />
                </tbody>
            </table>
        </div>
    );
};

export default ProgrammeTable;

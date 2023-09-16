const ProgrammeRow = ({ label, programmes, field, fieldHandler, classes, defaultNullValue }) => {
    if (
        programmes.filter((each) => {
            return typeof each[field] == "undefined";
        }).length == programmes.length
    ) {
        return;
    }

    var rowBody = programmes.map((each) => {
        let output;
        if (typeof each[field] == "undefined") {
            output = defaultNullValue ? defaultNullValue : " - ";
        } else if (fieldHandler) {
            output = fieldHandler(each[field]);
        } else if (Array.isArray(each[field])) {
            output = (
                <ul>
                    {each[field].map((a) => {
                        return <li>{a}</li>;
                    })}
                </ul>
            );
        } else {
            output = each[field];
        }

        return <td className={(classes ? classes : "") + " progCol"}>{output}</td>;
    });

    return (
        <tr>
            <td scope="row">{label}</td>
            {rowBody}
        </tr>
    );
};

export default ProgrammeRow;

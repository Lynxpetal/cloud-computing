const InputSelect = ({
    id,
    options,
    optionValueKey,
    optionTextKey,
    selectedIdx,
    onChangeHandler,
}) => {
    optionValueKey ??= "value";
    optionTextKey ??= "label";
    selectedIdx ??= false;

    return (
        <>
            <select class="form-select mb-3" id={id} style={{ width: "100%" }}>
                {options.map((each, idx) => {
                    return (
                        <option
                            selected={idx == selectedIdx}
                            value={each[optionValueKey]}
                            onChange={onChangeHandler}>
                            {each[optionTextKey]}
                        </option>
                    );
                })}
            </select>
        </>
    );
};

export default InputSelect;

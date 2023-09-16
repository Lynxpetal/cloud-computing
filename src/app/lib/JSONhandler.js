
export const getAllJsonData = async (jsonFile) => {
    if (jsonFile === undefined || jsonFile === null) return false;

    const requestBody = JSON.stringify({ jsonFile: jsonFile });

    const res = await fetch(process.env.BASE_URL + "api/getJsonData", {
        method: "POST",
        body: requestBody,
        header: { "Content-Type": "application/json" },
    });
    return await res.json();
};

export const getOneJsonData = async (jsonFile, key, value) => {
    if (jsonFile === undefined || jsonFile === null) return false;

    const requestBody =
        key === false && value === false
            ? JSON.stringify({ jsonFile: jsonFile })
            : JSON.stringify({ jsonFile: jsonFile, key: key, value: value });

    const res = await fetch(process.env.BASE_URL + "api/getJsonData", {
        method: "POST",
        body: requestBody,
        header: { "Content-Type": "application/json" },
    });
    return await res.json();
};

export const writeAllJsonData = async (jsonFile, writeData) => {
    if (jsonFile === undefined || jsonFile === null) return false;

    const requestBody = JSON.stringify({jsonFile : jsonFile, writeData: writeData})

    const res = await fetch(process.env.BASE_URL + "api/getJsonData", {
        method: "POST",
        body: requestBody,
        header: { "Content-Type": "application/json" },
    });
    return await res.json();
};

export const writeOneJsonData = async (jsonFile, writeData, key, value) => {
    if (jsonFile === undefined || jsonFile === null) return false;

    const requestBody =
        key === false && value === false
            ? JSON.stringify({ jsonFile: jsonFile, writeData: writeData })
            : JSON.stringify({ jsonFile: jsonFile, writeData: writeData, key: key, value: value });

    const res = await fetch(process.env.BASE_URL + "api/getJsonData", {
        method: "POST",
        body: requestBody,
        header: { "Content-Type": "application/json" },
    });
    return await res.json();
};
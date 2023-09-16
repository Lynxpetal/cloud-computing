import { NextResponse } from "next/server";
import fsPromises from "fs/promises";
import path from "path";

export async function POST(request) {
    const { jsonFile, writeData, key, value } = await request.json();

    // Error Conditions
    if (jsonFile == null) {
        return new NextResponse(JSON.stringify("Missing jsonFile parameter."));
    }
    // Write All JSON Data
    else if (key == null && value == null) {
        const dataFilePath = path.join(process.cwd(), "json", jsonFile);
        try {
            await fsPromises.writeFile(dataFilePath, JSON.stringify(writeData));
            return new NextResponse(
                JSON.stringify({ status: 200, message: "Data updated successfully. " })
            );
        } catch {
            return new NextResponse(
                JSON.stringify({ status: 500, message: "Invalid JSON Filename. " })
            );
        }
    }

    // Error conditions
    else if (key == null && value != null) {
        return new NextResponse(JSON.stringify({ status: 500, message: "Missing key. " }));
    } else if (key != null && value == null) {
        return new NextResponse(JSON.stringify({ status: 500, message: "Missing value. " }));
    }
    // Write one record by key: value pair
    else {
        const dataFilePath = path.join(process.cwd(), "json", jsonFile);
        try {
            const jsonData = JSON.parse(await fsPromises.readFile(dataFilePath));
            const idx = jsonData.findIndex((each) => each[key] == value);
            jsonData[idx] = writeData;
            await fsPromises.writeFile(dataFilePath, JSON.stringify(jsonData));

            return new NextResponse(
                JSON.stringify({ status: 200, message: "Data updated successfully. " })
            );
        } catch {
            return new NextResponse(
                JSON.stringify({ status: 500, message: "Invalid JSON Filename. " })
            );
        }
    }
}

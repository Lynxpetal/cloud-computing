"use client";
import trackIP from "@/lib/trackIP";
import { writeAllJsonData, getAllJsonData } from "@/lib/JSONhandler";
import { isResponseValid } from "@/lib/responseHandling";

const IPtracker = () => {
    var filename = "trackedIP.json";
    const makeApiCall = async () => {
        let ipResponse = await trackIP();
        let ip = ipResponse.ip;

        let jsonResponse = await getAllJsonData(filename);
        if (!isResponseValid(jsonResponse)) return;
        let currentJson = jsonResponse.message;
        
        if (currentJson.find(each => each == ip) == undefined) {
            currentJson.push(ip);
            console.log(currentJson)
            await writeAllJsonData(filename, currentJson);
        }

    };
    makeApiCall();
    return <div></div>;
};

export default IPtracker;

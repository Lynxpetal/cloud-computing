export function isResponseValid(res) {
    if (res.status != 200) {
        console.log(`Connection failed. Status ${res.status} received : ${res.message}`);
    }
    return res.status == 200;
}

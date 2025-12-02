import * as fs from "fs";

const comms = fs.readFileSync("input.txt", "utf8").toString().split(/\r?\n/);

let pakker = [];
let nøkkel = [];

for (let i = 0; i < comms.length; i++) {
    comms[i] = comms[i].trim();

    if (comms[i].startsWith("ADD")) {
        pakker.push(comms[i].split(" ")[1]);
    } else if (comms[i].startsWith("PROCESS")) {
        if (pakker.length > 0) {
            const pakke = pakker.shift();
            nøkkel.push(pakke.split("")[0]);
        } else {
            nøkkel.push("X");
        }
    } else {
        nøkkel.push((pakker.length % 10).toString());
    }
}

console.log(nøkkel.join(""));
console.log(comms.length)
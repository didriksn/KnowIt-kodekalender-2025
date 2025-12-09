import * as fs from "fs";

const range = fs.readFileSync("input.txt", "utf8").toString().split(",");

for (let i = 0; i < range.length; i++) {
    let start = range[i].split("-")[0];
    for (let j = 0; j < range[i].split("-")[1] - range[i].split("-")[0]; j++) {
        console.log(Number(start) + j);
    }
}
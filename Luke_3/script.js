import * as fs from "fs";

const list = fs.readFileSync("input (2).txt", "utf8").toString().split(/\r?\n/);

const barn = [];

for (let i = 0; i < list.length; i++) {
    const split = list[i].trim().split(",");
    const navn = split[0];
    const snillhet = parseInt(split[1], 10);
    const slemhet = parseInt(split[2], 10);
    const pepperkaker = parseInt(split[3], 10);
    const poeng = (snillhet*50) - (slemhet*25) + (pepperkaker*15);

    const barnObj = {
        navn,
        poeng
    }
    barn.push(barnObj);
}

barn.sort((a, b) => {
  return b.poeng - a.poeng;
});

const abc = [...barn.slice(0, 3), ... barn.slice(-3)].map(barn => `${barn.navn} ${barn.poeng}`).join(",");
console.log(abc)
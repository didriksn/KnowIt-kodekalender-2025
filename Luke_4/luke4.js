const fs = require("fs");
const loype = fs.readFileSync("track.txt", "utf8").toString().split("");

let energy = 3000;

function energyOf(char) {
  if (char === "S") return 5;
  if (char === "B") return 10;
  if (char === "D") return 15;
  return 0;
}

for (let j = 0; j < loype.length; j++) {
  const char = loype[j];
  const charBefore = loype[j - 1];
  const charBeforeBefore = loype[j - 2];

  energy -= energyOf(char);

  if (char === "P") {
    if (energyOf(charBefore) !== 0) energy += energyOf(charBefore);
    if (energyOf(charBeforeBefore) !== 0) energy += energyOf(charBeforeBefore); 
  }

  if (energy <= 0) {
    console.log((j)*10);
    break;
  }
}
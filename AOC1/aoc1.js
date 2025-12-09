const fs = require("fs");
const lines = fs.readFileSync("input.txt", "utf8").trim().split("\n");

function countZerosDuringRotations(lines) {
  let pos = 50;
  let count = 0;

  for (const line of lines) {
    const dir = line[0];
    const dist = Number(line.slice(1));

    for (let i = 0; i < dist; i++) {
      if (dir === "L") {
        pos = (pos - 1 + 100) % 100;
      } else {
        pos = (pos + 1) % 100;
      }

      if (pos === 0) count++;
    }
  }

  return count;
}

console.log(countZerosDuringRotations(lines));

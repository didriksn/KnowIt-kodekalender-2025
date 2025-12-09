const fs = require('fs');

// Sjekk om et tall er primtall
function isPrime(n) {
    if (n < 2) return false;
    if (n === 2) return true;
    if (n % 2 === 0) return false;
    const r = Math.floor(Math.sqrt(n));
    for (let i = 3; i <= r; i += 2) {
        if (n % i === 0) return false;
    }
    return true;
}

const data = fs.readFileSync('input (4).txt', 'utf8');
const lines = data.split(/\r?\n/).filter(l => l.trim() !== "");

let total = 0;

for (const line of lines) {
    const nums = line.trim().split(/\s+/).filter(x => x !== "");
    const lineLength = nums.length;

    if (isPrime(lineLength)) {
        // Linjen har primtall-lengde → sjekk hvert tall
        for (const numStr of nums) {
            const num = Number(numStr);
            if (isPrime(num)) {
                total++;
            }
        }
    }
}

console.log("Antall gledesspreder-tall:", total);

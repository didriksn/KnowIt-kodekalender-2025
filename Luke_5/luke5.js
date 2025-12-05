import * as fs from "fs";

const msg = fs.readFileSync("input (3).txt", "utf8").toString().split(" ");

const morseCodeMap = {
    'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.',
    'F': '..-.', 'G': '--.', 'H': '....', 'I': '..', 'J': '.---',
    'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---',
    'P': '.--.', 'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-',
    'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-', 'Y': '-.--',
    'Z': '--..',
    '0': '-----', '1': '.----', '2': '..---', '3': '...--', '4': '....-',
    '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.',
    ' ': '/'
};

const reverseMorseCodeMap = Object.entries(morseCodeMap).reduce((acc, [key, value]) => {
    acc[value] = key;
    return acc;
}, {});

function morseToText(morseCode) {
    return morseCode.split(' / ').map(wordMorse => { // Split words by ' / '
        return wordMorse.split(' ').map(charMorse => { // Split characters by space
            return reverseMorseCodeMap[charMorse] || '';
        }).join('');
    }).join(' '); // Join decoded words with spaces
}

function wordConverter(word) {
    if (word.length === 2) return ".";
    if (word.length === 4) return "-";
}

for (let i = 0; i < msg.length; i++) {
    const word = msg[i].split("_").map(wordConverter).join("");

    console.log(morseToText(word));
}
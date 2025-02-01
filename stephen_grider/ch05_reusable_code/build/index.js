"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CsvFileReader_1 = require("./CsvFileReader");
const matches = new CsvFileReader_1.CsvFileReader("football.csv");
matches.readFile();
let manUnitedWins = 0;
for (let match of matches.data) {
    if (match[1] === "Man United" && match[5] === "H" /* MatchResult.HomeWin */) {
        manUnitedWins++;
    }
    else if (match[2] === "Man United" && match[5] === "A" /* MatchResult.AwayWin */) {
        manUnitedWins++;
    }
}
console.log("Man United wins:", manUnitedWins);

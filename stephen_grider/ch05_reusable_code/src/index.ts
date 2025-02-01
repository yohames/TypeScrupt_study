import { CsvFileReader } from "./CsvFileReader";

const matches = new CsvFileReader("football.csv");

matches.readFile();

let manUnitedWins = 0;

const enum MatchResult {
  HomeWin = "H",
  AwayWin = "A",
  Draw = "D",
}
for (let match of matches.data) {
  if (match[1] === "Man United" && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === "Man United" && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}

console.log("Man United wins:", manUnitedWins);

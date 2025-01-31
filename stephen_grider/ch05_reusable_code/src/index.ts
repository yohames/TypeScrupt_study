import { readFileSync } from "node:fs";

const matches = readFileSync("football.csv", {
  encoding: "utf-8",
});

const arrayOfGames = matches.split("\n").map((e: string): string[] => {
  return e.split(",");
});

let manUnitedWins = 0;

enum MatchResult {
  HomeWin = "H",
  AwayWin = "A",
  Draw = "D",
}
for (let match of arrayOfGames) {
  if (match[1] === "Man United" && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === "Man United" && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}

console.log("Man United wins:", manUnitedWins);

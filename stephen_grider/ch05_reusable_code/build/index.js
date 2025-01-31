"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_fs_1 = require("node:fs");
const matches = (0, node_fs_1.readFileSync)("football.csv", {
    encoding: "utf-8",
});
const arrayOfGames = matches.split("\n").map((e) => {
    return e.split(",");
});
let manUnitedWins = 0;
var MatchResult;
(function (MatchResult) {
    MatchResult["HomeWin"] = "H";
    MatchResult["AwayWin"] = "A";
    MatchResult["Draw"] = "D";
})(MatchResult || (MatchResult = {}));
for (let match of arrayOfGames) {
    if (match[1] === "Man United" && match[5] === MatchResult.HomeWin) {
        manUnitedWins++;
    }
    else if (match[2] === "Man United" && match[5] === MatchResult.AwayWin) {
        manUnitedWins++;
    }
}
console.log("Man United wins:", manUnitedWins);

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WinsAnalysis = void 0;
const MatchResult_ENUM_1 = require("./MatchResult_ENUM");
class WinsAnalysis {
    constructor(teamName) {
        this.teamName = teamName;
    }
    run(matches) {
        let manUnitedWins = 0;
        for (let match of matches) {
            if (match[1] === this.teamName &&
                match[5].toString() === MatchResult_ENUM_1.MatchResult.HomeWin) {
                manUnitedWins++;
            }
            else if (match[2] === this.teamName &&
                match[5].toString() === MatchResult_ENUM_1.MatchResult.AwayWin) {
                manUnitedWins++;
            }
        }
        return `${manUnitedWins}`;
    }
}
exports.WinsAnalysis = WinsAnalysis;

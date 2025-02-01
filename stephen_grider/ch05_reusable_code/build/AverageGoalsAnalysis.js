"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AverageGoalsAnalysis = void 0;
class AverageGoalsAnalysis {
    constructor(teamName) {
        this.teamName = teamName;
    }
    run(matches) {
        let totalMatches = matches.filter((match) => match[1] === this.teamName || match[2] === this.teamName);
        let totalGoals = totalMatches.reduce((acc, match) => {
            if (match[5] === "H") {
                return acc + match[3];
            }
            else {
                return acc + match[4];
            }
        }, 0);
        const averageGoals = totalGoals / totalMatches.length;
        return averageGoals.toFixed(2);
    }
}
exports.AverageGoalsAnalysis = AverageGoalsAnalysis;

import { Analyser } from "./Summary";
import { MatchData } from "./MatchData";

export class AverageGoalsAnalysis implements Analyser {
  constructor(public teamName: string) {}

  run(matches: MatchData[]): string {
    let totalMatches = matches.filter(
      (match) => match[1] === this.teamName || match[2] === this.teamName
    );
    let totalGoals = totalMatches.reduce((acc, match): number => {
      if (match[5] === "H") {
        return acc + match[3];
      } else {
        return acc + match[4];
      }
    }, 0);
    const averageGoals = totalGoals / totalMatches.length;
    return averageGoals.toFixed(2);
  }
}

import { Analyser } from "./Summary";
import { MatchData } from "./MatchData";
import { MatchResult } from "./MatchResult_ENUM";

export class WinsAnalysis implements Analyser {
  constructor(public teamName: string) {}

  run(matches: MatchData[]): string {
    let manUnitedWins = 0;

    for (let match of matches) {
      if (
        match[1] === this.teamName &&
        match[5].toString() === MatchResult.HomeWin
      ) {
        manUnitedWins++;
      } else if (
        match[2] === this.teamName &&
        match[5].toString() === MatchResult.AwayWin
      ) {
        manUnitedWins++;
      }
    }

    return `${manUnitedWins}`;
  }
}

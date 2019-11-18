import { IAnalyser } from "../interface";
import { MatchResult, MatchDataType } from "../utils";

export class TotalWin implements IAnalyser<MatchDataType> {
  constructor(public team: string) {}
  run(data: MatchDataType[]): string {
    let man_united_wins = 0;
    data.forEach((match: MatchDataType) => {
      if (
        (match[1] === this.team && match[5] === MatchResult.HomeWin) ||
        (match[2] === this.team && match[5] === MatchResult.AwayWin)
      ) {
        man_united_wins += 1;
      }
    });
    return `Man United win count = ${man_united_wins}`;
  }
}

import { MatchReader } from "./MatchReader";
import { MatchResult, MatchDataType } from "./utils";

const reader = new MatchReader("./football.csv");
reader.read();

let man_united_wins = 0;
let man_united_total_points = 0;
let team = "Man United";

reader.data.forEach((match: MatchDataType) => {
  if (
    (match[1] === team && match[5] === MatchResult.HomeWin) ||
    (match[2] === team && match[5] === MatchResult.AwayWin)
  ) {
    man_united_wins += 1;
    man_united_total_points += 3;
  } else if (
    (match[1] === team && match[5] === MatchResult.Draw) ||
    (match[2] === team && match[5] === MatchResult.Draw)
  ) {
    man_united_total_points += 1;
  }
});
console.log(
  `Man United win count = ${man_united_wins} and total points = ${man_united_total_points}.`
);

export const parseDateStringToDate = (date: string): Date => {
  const dateArr = date.split("/").map(item => parseInt(item));
  return new Date(dateArr[2], dateArr[1] - 1, dateArr[0]);
};

export enum MatchResult {
  HomeWin = "H",
  AwayWin = "A",
  Draw = "D"
}

export type MatchDataType = [
  Date,
  string,
  string,
  number,
  number,
  MatchResult,
  string
];

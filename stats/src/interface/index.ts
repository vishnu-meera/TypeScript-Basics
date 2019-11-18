import { MatchResult, MatchDataType } from "../utils";
export interface IReader {
  data: string[][];
  read(): void;
}

export interface IAnalyser {
  run<T extends MatchDataType>(data: T[]): string;
}

export interface IReport {
  print(report: string): void;
}

import { MatchResult, parseDateStringToDate, MatchDataType } from "../utils";
import { IReader } from "../interface";

export class MatchReader {
  matches: MatchDataType[] = [];
  constructor(public reader: IReader) {}
  load(): void {
    this.reader.read();
    this.matches = this.reader.data.map(
      (row: string[]): MatchDataType => {
        return [
          parseDateStringToDate(row[0]),
          row[1],
          row[2],
          parseInt(row[3]),
          parseInt(row[4]),
          row[5] as MatchResult,
          row[6]
        ];
      }
    );
  }
}

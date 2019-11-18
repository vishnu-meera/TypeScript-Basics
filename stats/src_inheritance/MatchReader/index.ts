import { MatchResult, parseDateStringToDate, MatchDataType } from "../utils";
import { CSVReader } from "../CsvFileReader";
export class MatchReader extends CSVReader<MatchDataType> {
  mapRow(row: string[]): MatchDataType {
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
}

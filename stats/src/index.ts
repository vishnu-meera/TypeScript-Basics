import { CSVReader } from "./file_readers";
import { MatchReader } from "./MatchReader";

import { TotalWin } from "./analysers/Win";
import { ConsoleReport } from "./report/console";

import { MatchSummary } from "./MatchReader/summary";

const cvsDataReader = new CSVReader("./football.csv");
const matchReader = new MatchReader(cvsDataReader);
matchReader.load();

const newSummary = new MatchSummary(
  new TotalWin("Man United"),
  new ConsoleReport()
);
newSummary.buildAndReport(matchReader.matches);

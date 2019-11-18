import { IAnalyser, IReport } from "../interface";
import { MatchDataType } from "../utils";

export class MatchSummary {
  constructor(public analyser: IAnalyser, public report: IReport) {}

  buildAndReport(data: MatchDataType[]): void {
    let result = this.analyser.run<MatchDataType>(data);
    this.report.print(result);
  }
}

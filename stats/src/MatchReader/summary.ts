import { IAnalyser, IReport } from "../interface";
import { MatchDataType } from "../utils";

export class MatchSummary {
  constructor(
    public analyser: IAnalyser<MatchDataType>,
    public report: IReport
  ) {}

  buildAndReport(data: MatchDataType[]): void {
    let result = this.analyser.run(data);
    this.report.print(result);
  }
}
